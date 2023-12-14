/* this page is just one input for email verification */
import React, { useState, useEffect } from "react";
import { Button, Input, YStack } from "@my/ui";
import { useSignIn, useSignUp, useAuth, useUser } from "app/utils/clerk";
import { useRouter } from "solito/router";
import { ToastComp } from "@my/ui/src/components/ToastComp";
import { Banana } from '@tamagui/lucide-icons';

export function EmailVerificationScreen() {
  const router = useRouter();
  const [verificationCode, setVerificationCode] = useState("");
  const { signUp } = useSignUp();
  const { signIn } = useSignIn();

  if (!signUp) return null;

  if (!signIn) {
    // Handle the case where signIn is not available
    return null;
  }
  
  // this is for toast message
  const [list, setList] = useState<any[]>([]);

  const showToast = (type) => {
    let toastProperties;

    switch (type) {
      case "error":
        toastProperties = {
          id: 2,
          title: "Упс",
          description: `Неверный номер. проверьте почту еще раз.`,
          backgroundColor: "#d9534f",
          icon: Banana,
        };
        break;
      
      default:
        setList([]);
        break
    }

    setList([...list, toastProperties]);

  };

  const handleEmailVerificationOnPress = async () => {
  
    try {
      // Verify the email
      await signUp.attemptEmailAddressVerification({ code: verificationCode });
  
      if (signUp.status === "complete") {
        // Redirect to user page
        window.location.href = '/usercreate';
      } else {
        showToast("error");
      }
    } catch (error) {
      console.error("Error during email verification:", error);
      showToast("error");
    }
  };
  

  return (
    <YStack f={1} jc="center" ai="center" space>
      <ToastComp 
      toastList={list}
      position="bottom-center"
      autoDelete={true}
      autoDeleteTime={3000}
      />
      <Input
        placeholder="Вставьте код из письма ..."
        onChangeText={(text) => {
          setVerificationCode(text);
        }}
      />

      {/* button for submitting */}
      <Button
        onPress={() => {
          handleEmailVerificationOnPress();
        }}
      >
        Проверить
      </Button>
    </YStack>
  );
}
