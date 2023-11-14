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

export function ButtonWithSheet(Props) {
  const [open, setOpen] = useState(false)
 
  return (
    <YStack ai="center">
      <Dialog
        modal
        onOpenChange={(open) => {
          setOpen(open)
        }}>
        
        { Props.Description && (
        <Dialog.Trigger asChild>
          <Square
            bc="$background"
            /* animation="bouncy" */
            boc="$backgroundFocus"
            bw={Props.Description ? 3 : 1}
            size="$7"
            br="$5"
            m="$1.5"
            /* hoverStyle={Props.Description ? { scale: 1.1 } : {}}
            pressStyle={Props.Description ? { scale: 0.9 } : {}} */
            >
            <H3>{Props.Title}</H3>
          </Square>
        </Dialog.Trigger>
        )}

        { !Props.Description && (
          <Square
            bc="$background"
            /* animation="bouncy" */
            boc="$backgroundFocus"
            bw={Props.Description ? 3 : 1}
            size="$7"
            br="$5"
            m="$1.5"
            /* hoverStyle={Props.Description ? { scale: 1.1 } : {}}
            pressStyle={Props.Description ? { scale: 0.9 } : {}} */
            >
          <H3>{Props.Title}</H3>
        </Square>
        )}

        <Adapt when="sm" platform="touch">
          <Sheet
            zIndex={200000}
            modal
            dismissOnSnapToBottom
            >
            <Sheet.Overlay o={0}/>
            <Sheet.Frame padding="$4" space>
              <Adapt.Contents />
            </Sheet.Frame>
          </Sheet>
        </Adapt>

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
            space
          >
            <Dialog.Title>{Props.Title}</Dialog.Title>
            <Dialog.Description>
              {/* {Props.Description} */}
            </Dialog.Description>
            <YStack ai="center" m="$4">
              <Dialog.Close displayWhenAdapted asChild>
                <XStack>
                  <YStack>
                    <ParagraphCustom text={Props.Colum1_1} />
                    <ParagraphCustom text={Props.Colum2_1} />
                    <ParagraphCustom text={Props.Colum3_1} />
                    <ParagraphCustom text={Props.Colum4_1} />  
                  </YStack>
                  <Separator als="stretch" vertical mx={15} />
                  <YStack>
                    <Paragraph ta="left">
                      {Props.Colum1_2}<br/>
                      {Props.Colum2_2}<br/>
                      {Props.Colum3_2}<br/>
                      {Props.Colum4_2}<br/>
                    </Paragraph>
                  </YStack>
                </XStack>
              </Dialog.Close>
            </YStack>
            
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
} 