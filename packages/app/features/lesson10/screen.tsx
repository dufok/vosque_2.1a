import {
  Paragraph,
  YStack,
  XStack,
  Button
 } from "@my/ui";
import { trpc } from "../../utils/trpc";
import { useLink } from "solito/link";
import React,{useEffect,useState} from "react";
import { useAuth } from "app/utils/clerk";
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons';

import { HeaderComp } from "@my/ui/src/components/HeaderComp";
import { SpinnerOver } from "@my/ui/src/components/SpinnerOver";

import { VideoPlayer } from '@my/ui/src/components/VideoPlayer';
import { SquareText } from '@my/ui/src/components/SquareText';
import { SubMenu } from "@my/ui/src/components/SubMenu";
import { WelcomeBlock } from "@my/ui/src/components/WelcomeBlock";
import { ImageCircle } from "@my/ui/src/components/ImageCircle";
import { HeaderBlock } from "@my/ui/src/components/HeaderBlock";
import { DescriptionBlock } from "@my/ui/src/components/DescriptionBlock";
import { TextExampleBlock } from "@my/ui/src/components/TextExampleBlock";
import { ExercisesBlockText } from "@my/ui/src/components/ExercisesBlockText";
import { NavigationBlock } from "@my/ui/src/components/NavigationBlock";
import { TableBlock } from "@my/ui/src/components/TableBlock";
import { LangTest1 } from "@my/ui/src/components/LangTest1";
import { LangTest4 } from "@my/ui/src/components/LangTest4";
import { LifeHackerBlock } from "@my/ui/src/components/LifeHackerBlock";
import { WordToTranslateBlock } from "@my/ui/src/components/WordToTranslateBlock";
import { DopDialog } from "@my/ui/src/components/DopDialog";

import { ContentLesson10 } from './type_Lesson10';
import { ContentLesson10_2 } from './type_Lesson10';

export function lesson10Screen() {

  const userpageLinkProps = useLink({ href: "/userpage"});
  const { isSignedIn, isLoaded } = useAuth();
  const { data, isLoading, error } = trpc.entry.all.useQuery();
  useEffect(() => {
    console.log(data);
  }, [isLoading]);
  const { data: userLessons, isLoading: userLessonsLoading } = trpc.user.userLessons.useQuery();
  const isLoadingOverall = userLessonsLoading || isLoading;
  if (error) {
    return <Paragraph>{error.message}</Paragraph>;
  }
  if (!isLoaded || isLoadingOverall) {
    return <SpinnerOver />;
  }
  
  return (
    <YStack f={1} jc="space-between">
      <YStack>
        <HeaderComp />
        { isSignedIn ? <Lesson10SignIn userLessons={userLessons} /> : null}
      </YStack>
      <SubMenu userpageLinkProps={userpageLinkProps}/>
    </YStack>
  );
}

export function Lesson10SignIn({userLessons}) {

  //Open or close treory block

    const [isOpen, setIsOpen] = useState(true);
    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };

    const [isOpen2, setIsOpen2] = useState(true);
    const toggleOpen2 = () => {
      setIsOpen2(!isOpen2);
    };

  // Part Config

  const lessonLinkPageUP = useLink({ href: "/lesson11"});
  const lessonLinkPageDown = useLink({ href: "/lesson9"});

  const lessonName = "урок 10";
  const TenthLesson = userLessons?.find(lesson => lesson.name.toLowerCase().includes(lessonName.toLowerCase()));

  const partName =  "l10p2";
  const TenthPartTwoLesson = userLessons?.find(lesson => lesson.name === partName);

  // Part Content

  const content = TenthLesson?.content as ContentLesson10;
  const content2 = TenthPartTwoLesson?.content as ContentLesson10_2;

  const exercises1 = Object.values(content?.exercisesBlockText1 || {});
  const tests4_1 = Object.values(content?.langTest4_1.testContent || {});
  const example4_1 = content?.langTest4_1.example;
  const tests1_1 = Object.values(content?.langTest1_1.testContent || {});
  const example1_1 = content?.langTest1_1.example;

  // Part 2 Content

  const exercises2 = Object.values(content2?.exercisesBlockText1 || {});
  const exercises3 = Object.values(content2?.exercisesBlockText2 || {});
  const exercises4 = Object.values(content2?.exercisesBlockText3 || {});
  const exercises5 = Object.values(content2?.exercisesBlockText4 || {});
  const exercises6 = Object.values(content2?.exercisesBlockText5 || {});
  const tests1_2 = Object.values(content2?.langTest1_1.testContent || {});
  const example1_2 = content2?.langTest1_1.example;
  const tests1_3 = Object.values(content2?.langTest1_2.testContent || {});
  const example1_3 = content2?.langTest1_2.example;
  const wordToTranslate1 = Object.values(content2?.wordToTranslateBlock1 || {});
  const wordToTranslate2 = Object.values(content2?.wordToTranslateBlock2 || {});
  const wordToTranslate3 = Object.values(content2?.wordToTranslateBlock3 || {});
  const textExample1 = Object.values(content2?.textExampleBlock1 || {});

  return (
      <YStack f={1}>
        <YStack ai="center" mt="$10">
          <WelcomeBlock
            name={TenthLesson?.name}
            description={content?.description}/>
            <YStack  w="100%" $gtSm={{ width: "70%" }}>
              <VideoPlayer linkVideo={content?.video} poster={content?.poster}/>
            </YStack>
            <ImageCircle img={content?.image}/>

            <HeaderBlock header={content?.headerBlock1}/>
              {isOpen && (
                <> 
                  <TableBlock table={content?.tableBlock1} />
                  <SquareText text={content?.squareText3} />
                  <YStack ai="center">
                    <ExercisesBlockText exercises={exercises1} />
                  </YStack>
                  <LifeHackerBlock
                    lifehacktitle={content?.lifeHackerBlock1.title}
                    descriptions={[
                      content?.lifeHackerBlock1.description1,
                      content?.lifeHackerBlock1.description2,
                      content?.lifeHackerBlock1.description3,
                      content?.lifeHackerBlock1.description4,
                    ]}
                    contents={[
                      content?.lifeHackerBlock1.content1,
                      content?.lifeHackerBlock1.content2,
                      content?.lifeHackerBlock1.content3,
                      content?.lifeHackerBlock1.content4,
                    ]}
                  />
                </>
              )}
            <Button
            w={100}
            h={30}
            bw={1}
            br="$2"
            bg="$backgroundFocus"
            icon={isOpen ? ChevronUp : ChevronDown } color="$background" onPress={() => {toggleOpen()}}/>

              {/* Блок Упражнений */}

            <HeaderBlock header={content?.headerBlock2} />
            <SquareText text={content?.squareText1} />
            <LangTest4 example={example4_1} tests={tests4_1} />
            <SquareText text={content?.squareText2} />
            <LangTest1 example={example1_1} tests={tests1_1} />

            <WelcomeBlock
              name={content2?.name}
              description={content2?.description}/>

            <HeaderBlock header={content2?.headerBlock1}/>
              {isOpen2 && (
                <>
                  <TableBlock table={content2?.tableBlock1} />

                  <SquareText text={content2?.squareText3} />
                  <YStack ai="center">
                    <ExercisesBlockText exercises={exercises2} />
                  </YStack>

                  <TableBlock table={content2?.tableBlock2} />
                  <TableBlock table={content2?.tableBlock3} />
                  <SquareText text={content2?.squareText4} />
                  <YStack ai="center">
                    <ExercisesBlockText exercises={exercises3} />
                  </YStack>
                  <TableBlock table={content2?.tableBlock4} />
                  <SquareText text={content2?.squareText5} />
                  <YStack ai="center">
                    <ExercisesBlockText exercises={exercises4} />
                  </YStack>
                  <TableBlock table={content2?.tableBlock5} />
                  <SquareText text={content2?.squareText6} />
                  <YStack ai="center">
                    <ExercisesBlockText exercises={exercises5} />
                  </YStack>
                  <TableBlock table={content2?.tableBlock6} />
                  <SquareText text={content2?.squareText7} />
                  <YStack ai="center">
                    <ExercisesBlockText exercises={exercises6} />
                  </YStack>
                </>
              )}
            <Button
            w={100}
            h={30}
            bw={1}
            br="$2"
            bg="$backgroundFocus"
            icon={isOpen2 ? ChevronUp : ChevronDown } color="$background" onPress={() => {toggleOpen2()}}/>

            <HeaderBlock header={content2?.headerBlock2} />
            <SquareText text={content2?.squareText1} />
            <LangTest1 example={example1_2} tests={tests1_2} />

            <HeaderBlock header={content2?.headerBlock3} />
            <SquareText text={content2?.squareText11} />
            <WordToTranslateBlock words={wordToTranslate1} />
            <SquareText text={content2?.squareText12} />

            <YStack w="100%" $gtSm={{ width: "40%" }}>
              <TextExampleBlock textExamples={textExample1}/>
            </YStack>
            <LifeHackerBlock
              lifehacktitle={content2?.lifeHackerBlock1.title}
              descriptions={[
                content2?.lifeHackerBlock1.description1,
                content2?.lifeHackerBlock1.description2,
                content2?.lifeHackerBlock1.description3,
                content2?.lifeHackerBlock1.description4,
              ]}
              contents={[
                content2?.lifeHackerBlock1.content1,
                content2?.lifeHackerBlock1.content2,
                content2?.lifeHackerBlock1.content3,
                content2?.lifeHackerBlock1.content4,
              ]}
            />
            
            <SquareText text={content2?.squareText13} />
            <WordToTranslateBlock words={wordToTranslate2} />
            <SquareText text={content2?.squareText14} />
            <DescriptionBlock description={content2?.descriptionBlock6} />
            <WordToTranslateBlock words={wordToTranslate3} />

              {/* Домашнее задание */}

            <HeaderBlock header={content2?.headerBlock4} />
            <SquareText text={content2?.squareText2} />
            <LangTest1 example={example1_3} tests={tests1_3} />

            {/* Дополнительные материалы */}

            <HeaderBlock header={content2?.headerBlock5} />
            <DopDialog contents={content2?.dopDialog1}/>

          </YStack>
        <NavigationBlock
          lessonLinkPageDOWNname={"Урок 9"}
          lessonLinkPageUPname={"Урок 11"}
          lessonLinkPageUP={lessonLinkPageUP} 
          lessonLinkPageDOWN={lessonLinkPageDown}/>
      </YStack>
  );
} 