import { 
  Paragraph,
  YStack,
  H3,
  XStack,
  Dialog,
  Adapt,
  Sheet,
  Button,
  Unspaced,
  Separator,
  Square
  } from 'tamagui';
import { X } from '@tamagui/lucide-icons'
import React, {useState} from "react";

import { ParagraphCustom } from "./CustomText";

export type Letter = {
  name: string;
  description: string;
  Colum1_1: string;
  Colum2_1: string;
  Colum3_1: string;
  Colum4_1: string;
  Colum1_2: string;
  Colum2_2: string;
  Colum3_2: string;
  Colum4_2: string;
};

interface ButtonSquereSheetProps {
  letters: Letter[];
}

export const ButtonSquareSheetCombined: React.FC<ButtonSquereSheetProps> = ({ letters }) => {
  return (
    <YStack mt="$4" ai="center" f={1} maw={800}>
      <XStack jc="center" m="$4" fw='wrap' ai="center">
        {letters.map(({ name, description, Colum1_1, Colum2_1, Colum3_1, Colum4_1, Colum1_2, Colum2_2, Colum3_2, Colum4_2 }) => {
          const [open, setOpen] = useState(false);

          return (
            <YStack ai="center" key={name}>
              <Dialog
                modal
                onOpenChange={setOpen}>

                {/* Button to trigger modal */}
                
                <Dialog.Trigger asChild>
                  <Square
                    bc="$background"
                    boc="$backgroundFocus"
                    bw={description ? 3 : 1}
                    size="$7"
                    br="$5"
                    m="$1.5">
                    <H3>{name}</H3>
                  </Square>
                </Dialog.Trigger>

                {/* Dialog content */}
                <Dialog.Portal>
                  <Dialog.Overlay
                    key="overlay"
                    animation="quick"
                    style={{ opacity: 0.5 }}
                    enterStyle={{ opacity: 0 }}
                    exitStyle={{ opacity: 0 }}
                  />
                  <Dialog.Content
                    bordered
                    elevate
                    key="content"
                    animateOnly={['opacity']}
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
                    space>
                    <Dialog.Title>{name}</Dialog.Title>
                    {/* Columns display */}
                    <YStack ai="center" m="$4">
                      <Dialog.Close displayWhenAdapted asChild>
                      <XStack>
                        <YStack maw="50%">
                          {/* Column 1_1 to 1_4 */}
                          <ParagraphCustom text={Colum1_1} />
                          <ParagraphCustom text={Colum2_1} />
                          <ParagraphCustom text={Colum3_1} />
                          <ParagraphCustom text={Colum4_1} />
                        </YStack>
                        <Separator als="stretch" vertical mx={15} />
                        <Paragraph>
                          {Colum1_2}<br />
                          {Colum2_2}<br />
                          {Colum3_2}<br />
                          {Colum4_2}<br />
                        </Paragraph>
                      </XStack>
                      </Dialog.Close>
                    </YStack>
                    {/* Close button */}
                    <Unspaced>
                      <Dialog.Close asChild>
                        <Button pos="absolute" t="$3" r="$3" size="$2" circular icon={X} />
                      </Dialog.Close>
                    </Unspaced>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog>
            </YStack>
          );
        })}
      </XStack>
    </YStack>
  );
};