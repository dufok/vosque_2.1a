import {
  Paragraph,
  YStack,
  XStack,
  Spinner,
  Button,
  Input,
  H3,
  H4,
  XGroup,
  AlertDialog
 } from "@my/ui";
import { trpc } from "app/utils/trpc";
import { useLink } from "solito/link";
import React,{useEffect, useState, useRef} from "react";
import { Ticket, ChevronDown } from '@tamagui/lucide-icons';
import { Sheet } from '@tamagui/sheet';
import { SpinnerOver } from "@my/ui/src/components/SpinnerOver";

import { SaleButton } from "@my/ui/src/components/SaleButton";





export function testScreen() {

  const isLoadedTest = false;

  if (isLoadedTest) {
    return <SpinnerOver />;
  }

  return (
    <YStack f={1} ai="center">
      <SaleButton />
    </YStack>
  );
}