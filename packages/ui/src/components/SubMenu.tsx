import { Paragraph, H5, YStack, XStack, Button } from "tamagui";
import React from "react";
import { GithubIcon } from "./GithubIcon";
import { InstagramIcon } from "./GithubIcon";
import { TelegramIcon } from "./GithubIcon";

import '../SubMenu.css'


export function SubMenu({userpageLinkProps}) {

  return(
    <YStack w="100%" pt="$2" pb="$2" backgroundColor="$backgroundFocus" >
      <XStack f={1} w="100%" ai="center" jc="space-between">
        <XStack alignSelf="flex-start" p="$3" space="$3">
          <a href="https://github.com/dufok" target="_blank" rel="noopener noreferrer">
            <GithubIcon width={30} color="#FFFDEF" />
          </a>
          <a href="https://instagram.com/vosque.education" target="_blank" rel="noopener noreferrer">
            <InstagramIcon width={30} color="#FFFDEF" />
          </a>
          <a href="https://t.me/vosque_help" target="_blank" rel="noopener noreferrer">
            <TelegramIcon width={30} color="#FFFDEF" />
          </a>
        </XStack>
        <Paragraph size="$4">v2.1a</Paragraph>
        <YStack mr="$6">
          {/* <Button {...userpageLinkProps} bc="backgroundPress" bw='0'>
            <Paragraph >
              ВОЙТИ / ЗАПИСАТЬСЯ
            </Paragraph>
          </Button> */}
          <a href="https://t.me/vosque_help" target="_blank" rel="noopener noreferrer">
            <H5
              className="h3-animation"
              color="$background"
            >
              ПОМОЩЬ ТУТ
            </H5>
          </a>
        </YStack>
      </XStack>
    </YStack>
  )
}