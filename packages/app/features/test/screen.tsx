import {
  Paragraph,
  YStack,
 } from "@my/ui";
 import {
  H1
 } from "tamagui";
 import React from "react";


export function testScreen() {

  return (
    <YStack f={1} ai="center">
      <H1>Test</H1>
      <Paragraph> Это тест из my/ui </Paragraph>
      <Paragraph fontFamily="$body"> Это тест из tamagui </Paragraph>
    </YStack>
  );
}