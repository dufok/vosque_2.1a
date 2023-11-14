import { YStack, Paragraph, XStack } from "tamagui";
import React from "react";

import {AudioPlayer} from "./AudioPlayer";
import { ParagraphCustom } from "./CustomText";

export type Exercise = {
  text: string;
  audio: string;
};

interface ExercisesBlockAudioProps {
  exercises: Exercise[];
}

export const ExercisesBlockAudio: React.FC<ExercisesBlockAudioProps> = ({ exercises }) => {
  return (
    <YStack marginHorizontal="$6" ai="flex-start" w="90%" maw={900} mb="$4">
      <YStack>
        {exercises.map(({text, audio}, index) => (
            <XStack key={index} w="100%" f={1}>
              <YStack ai="flex-start" jc="center" mr="$2">
                <AudioPlayer src={audio}/>
              </YStack>
              <YStack marginVertical="$4" f={0.8}>
                <ParagraphCustom text={text} />
              </YStack>
            </XStack>
          ))}
      </YStack>
    </YStack>
  )
}