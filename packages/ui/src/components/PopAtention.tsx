import { Paragraph, YStack, AlertDialog, Button, XStack } from "tamagui";
import React,{useEffect, useState} from "react";
import { useRouter } from "solito/router";
import { ParagraphCustom } from './CustomText'

export function PopAtention({ isOpen: initialIsOpen }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const handleOnClick = () => {
    router.push(`/userpage`);
    setIsOpen(false);
  };

  return (
      <AlertDialog native open={isOpen}>
      <AlertDialog.Trigger asChild>
        {/* <Button zIndex={100_000} style={{ position: 'fixed', bottom: '50px', right: '10px'}} onPress={() => setIsOpen(true)}>Скидка</Button> */}
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
          $gtMd={{ maw: '50%' }}
        >
          <YStack space="$3">
            <AlertDialog.Title>Внимание! Внимание!</AlertDialog.Title>
            <AlertDialog.Description>
              Только до 9 января!
            </AlertDialog.Description>

            <ParagraphCustom text="Получите скидку 31% на курс аргентинского испанского в честь праздников! 💸🎉" />
            <ParagraphCustom text="💬 Пока все планируют бросить курить или начать заниматься спортом, поднимайте планку – пора выучить испанский и начать вливаться в аргентинскую среду! 🎁✨" />
            <ParagraphCustom text="^Введите промокод PAPANOEL в момент покупки и получите скидку 31% на курс, который выстроит структуру в вашей голове. 🚀🎅🏽^" />
            <ParagraphCustom text="Превращайте мечты в цели! Станьте языковым магом в этот праздничный сезон!🧙🏻🧝🏾‍♀️" />
            
              <XStack space="$2" jc="space-around" $gtXs={{ justifyContent : "flex-end" }} >
                <AlertDialog.Cancel asChild>
                  <Button onPress={() => setIsOpen(false)}>Закрыть</Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action asChild>
                  <Button
                    onPress={handleOnClick}
                  >
                    Начать бесплатно
                  </Button>
                </AlertDialog.Action>
              </XStack>
            
          </YStack>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  );
}
