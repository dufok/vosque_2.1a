import React, { useEffect, useState } from "react";
import { SpinnerOver } from "@my/ui/src/components/SpinnerOver";
import { trpc } from "app/utils/trpc";
import { useUser } from "app/utils/clerk";
import { useRouter } from "solito/router";

export function usercreateScreen() {

    const router = useRouter();
    const { user } = useUser();

    const [retryCount, setRetryCount] = useState(0);
    const [hasAttemptedCreate, setHasAttemptedCreate] = useState(false);
    const [hasAttemptedAddLessonPack, setHasAttemptedAddLessonPack] = useState(false);

    const createUserMutation = trpc.user.create.useMutation();
    const updateUserLessonPack = trpc.user.updateUserLessonPack.useMutation();

    useEffect(() => {
        if (user && !hasAttemptedCreate) {
            console.log("Creating user");
            const userId = user.id;
            const primaryEmailObject = user.emailAddresses.find(email => email.id === user.primaryEmailAddressId);
            const userEmail = primaryEmailObject?.emailAddress;

            if (userId && userEmail) {
                createUserMutation.mutateAsync({
                    id: userId,
                    email: userEmail,
                    userName: userEmail,
                }).then(() => {
                    setHasAttemptedCreate(true);
                }).catch((error) => {
                    console.error("Error creating user:", error);
                });
            }
        } else if (retryCount < 10) {
            const timer = setTimeout(() => {
                console.log( retryCount );
                setRetryCount(retryCount + 1);
            }, 3000); // Retry after 3 seconds
            return () => clearTimeout(timer);
        }
    }, [user, retryCount, hasAttemptedCreate]);

    useEffect(() => {
        if (hasAttemptedCreate && !hasAttemptedAddLessonPack) {
            console.log("Adding lesson pack");
            const userId = user?.id;
            if (userId) {
                updateUserLessonPack.mutateAsync({
                    userId,
                    lessonPackName: "Пробный пакет",
                }).then(() => {
                    setHasAttemptedAddLessonPack(true);
                }).catch((error) => {
                    console.error("Error adding lesson pack:", error);
                });
            }
        }
    }, [user, hasAttemptedCreate, hasAttemptedAddLessonPack]);

    useEffect(() => {
        if (hasAttemptedCreate && hasAttemptedAddLessonPack) {
            router.push("/userpage");
        }
    }, [hasAttemptedCreate, hasAttemptedAddLessonPack]);

    return <SpinnerOver /> ;
}