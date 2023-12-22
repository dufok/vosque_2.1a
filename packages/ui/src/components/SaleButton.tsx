// This Sale button working with coupon code.
// It is not used now, but it can be used in future.
// Coupon stored in url. And going to course page with coupon code.
 
import { Paragraph, YStack, AlertDialog, Button, XStack, AlertDialogContent } from "tamagui";
import React,{useEffect, useState} from "react";
import { useRouter } from "next/router";
import { ParagraphCustom } from './CustomText'

interface SaleButtonProps {
  isOpen: boolean;
}

export function SaleButton({ isOpen: initialIsOpen }: SaleButtonProps) {
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const sale = process.env.NEXT_PUBLIC_SECRET_SALE;
  if (!sale) 
    return null;
  const router = useRouter();

  const handleOnClick = () => {
    const queryParams = new URLSearchParams({
      coupon: sale.toString(),
    }).toString();
    router.push(`/course?${queryParams}`);
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(initialIsOpen);
  }, [initialIsOpen]);
  
  return (
    <AlertDialog native open={isOpen}>
    <AlertDialog.Trigger asChild>
      <Button zIndex={100_000} style={{ position: 'fixed', bottom: '50px', right: '10px'}} onPress={() => setIsOpen(true)}>Скидка</Button>
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay
        key="overlay"
        animation="quick"
        style={{ opacity: 0.3 }}
        enterStyle={{ opacity: 0 }}
      />
      <AlertDialog.Content
        bordered
        elevate
        key="content"
        animation={[
          'quick',
          {
            opacity: {
              overshootClamping: true,
            },
          },
        ]}
        enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
        exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
        x={0}
        scale={1}
        opacity={1}
        y={0}
        maw='80%'
      >
        <YStack space>
          <AlertDialog.Title>Внимание! Внимание! </AlertDialog.Title>
          <AlertDialog.Description>
            Только до 9 января!
          </AlertDialog.Description>
          
            <ParagraphCustom text="Получите скидку 31% на курс аргентинского испанского в честь праздников! 💸🎉" />
            <ParagraphCustom text="💬 Пока все планируют бросить курить или начать заниматься спортом, поднимайте планку – пора выучить испанский и начать вливаться в аргентинскую среду! 🎁✨" />
            <ParagraphCustom text="^Введите промокод PAPANOEL в момент покупки и получите скидку 31% на курс, который выстроит структуру в вашей голове. 🚀🎅🏽^" />
            <ParagraphCustom text="Превращайте мечты в цели! Станьте языковым магом в этот праздничный сезон!🧙🏻🧝🏾‍♀️" />
          

            {/*<Paragraph mt="$2">Чтобы воспользоваться скидкой, скопируйте промокод {sale} и введите его на странице оплаты, предварительно выбрав подходящий тариф.</Paragraph>*/}
          <XStack space="$3" justifyContent="flex-end">
            <AlertDialog.Cancel asChild>
              <Button onPress={() => setIsOpen(false)}>Закрыть</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button
                onPress={handleOnClick}
              >
                Купить
              </Button>
            </AlertDialog.Action>
          </XStack>
        </YStack>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog>
);
}