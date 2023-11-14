import crypto from 'crypto';
import { PrismaClient } from "@prisma/client";
import { sendEmailMessage } from "@my/ui/src/components/sendEmailMessage";
import { sendTelegramMessage } from "@my/ui/src/components/sendTelegramMessage";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    console.log('Received a non-POST request');
    return res.status(405).end();
  }

  // Verify Binance's signature
  const binanceSignature = req.headers['binancepay-signature'];
  /* const decodedBinanceSignature = Buffer.from(binanceSignature, 'base64').toString('utf-8');
  console.log('Decoded signature:', decodedBinanceSignature); */
  const binanceTimestamp = req.headers['binancepay-timestamp'];
  /* console.log('Received timestamp:', binanceTimestamp); */
  const binanceNonce = req.headers['binancepay-nonce'];
  /* console.log('Received nonce:', binanceNonce); */
  const payload = req.body;
  console.log('Received payload:', payload);
  
  const signaturePayload = `${binanceTimestamp}\n${binanceNonce}\n${JSON.stringify(payload)}\n`;

  /* console.log('signature payload:', signaturePayload); */

  const parsedData = JSON.parse(payload.data);
  const merchantTradeNo = parsedData.merchantTradeNo;
  console.log('Received merchantTradeNo:', merchantTradeNo);
  const productName = parsedData.productName;
  console.log('Received productName:', productName);

  const yourSignature = crypto
    .createHmac('sha512', process.env.BINANCE_SECRET_KEY)
    .update(signaturePayload)
    .digest('hex');

  const yourSignatureBytes = Buffer.from(yourSignature, 'hex');
  const binanceSignatureBytes = Buffer.from(binanceSignature, 'base64');

  if (yourSignatureBytes.equals(binanceSignatureBytes)) {
    console.log('Signature matches');
  } else {
    console.log('Signature verification failed');
    /* return res.status(401).json({ message: 'Invalid signature' }); */
  }

  /* if (yourSignature !== decodedBinanceSignature) {
    console.log('Signature verification failed');
    return res.status(401).json({ message: 'Invalid signature' });
  } */
  
  const paymentType = payload.bizType;

  // Payment is closed
  if (paymentType === 'PAY' && payload.bizStatus === 'PAY_CLOSED') {
    try {

        const payment = await prisma.payment.findUnique({
          where: { merchantTradeNo: merchantTradeNo },
        });

        if (!payment) {
            console.log('Payment not found for merchantTradeNo:', merchantTradeNo);
            /* return res.status(404).json({ message: 'Payment not found' }); */
        }

        // delete payment from database
        await prisma.payment.delete({
            where: { merchantTradeNo: merchantTradeNo }
        });

    } catch (error) {
        console.error("Error deleting payment:", error);
        /* return res.status(500).json({ returnCode: 'ERROR', returnMessage: 'Failed to close payment' }); */
    }
  } 

  // Payment is refunded

  if ( paymentType === 'PAY_REFUND' && payload.bizStatus === 'REFUND_SUCCESS') {
    try {
      // update payment status in database
      
      // Find the the merchantTradeNo
      const payment = await prisma.payment.findUnique({
        where: { merchantTradeNo: merchantTradeNo },
      });

      if (!payment) {
        console.log('Payment not found for merchantTradeNo:', merchantTradeNo);
        /* return res.status(404).json({ message: 'Payment not found' }); */
      } else {
        
        await prisma.payment.update({
          where: { merchantTradeNo: merchantTradeNo },
          data: { status: 'REFUNDED' },
        });

        await sendTelegramMessage( `🌾 Пользователю вернули деньги через BINANCE`, req );
        console.log('Successfully sent telegram message to user');
      }

    } catch (error) {
      console.error("Error updating payment:", error);
      /* return res.status(500).json({ returnCode: 'ERROR', returnMessage: 'Failed to update payment' }); */
    }
  }

  // Process the payment status from the request body.
  if (paymentType === 'PAY' && payload.bizStatus === 'PAY_SUCCESS') {
    console.log('Payment status is SUCCESS');

    // Find the user associated with the merchantTradeNo
    const payment = await prisma.payment.findUnique({
        where: { merchantTradeNo: merchantTradeNo },
    });

    if (!payment) {
        console.log('Payment not found for merchantTradeNo:', merchantTradeNo);
        /* return res.status(404).json({ message: 'Payment not found' }); */
    }

    const userId = payment.userId;
        console.log('Found user ID:', userId);

    // Find the LessonPack using the sku_number
    const lessonPack = await prisma.lessonPack.findFirst({
        where: { name: productName },
    });

    if (!lessonPack) {
        console.log('LessonPack not found for SKU:', productName);
        /* return res.status(404).json({ message: 'LessonPack not found' }); */
    }

    console.log('Found LessonPack:', lessonPack);

    // Connect the LessonPack to the User
    await prisma.user.update({
        where: { id: userId },
        data: { lessonPacks: { connect: { id: lessonPack.id } } },
    });

    console.log('Successfully connected LessonPack to user');

    // Send email to user
    const user = await prisma.user.findUnique({
        where: { id: userId },
    });

    try {
        await sendEmailMessage(user.email , req);
        console.log('Successfully sent email to user');
        await sendTelegramMessage( `💰 Пользователь: ${user.email} оплатил курс: ${productName}. Через BINANCE`, req );
        console.log('Successfully sent telegram message to user');
    } catch (error) {
        console.error("Error sending email:", error);
        /* return res.status(500).json({ returnCode: 'ERROR', returnMessage: 'Failed to send email' }); */
    }

    // Update the payment status in the database
    await prisma.payment.update({
        where: { merchantTradeNo: merchantTradeNo },
        data: { status: 'SUCCESS' },
    });

    console.log('Payment status updated to SUCCESS in the database');

  }

  // Respond to Binance.
  res.status(200).json({ returnCode: 'SUCCESS', returnMessage: null });
}