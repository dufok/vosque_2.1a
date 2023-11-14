import { Paragraph, YStack, XStack, Square, H5, Button, Image} from "tamagui";
import React, { useState, useEffect } from "react";
import { X } from '@tamagui/lucide-icons'

import "../toast.css";

import PropTypes from "prop-types";

ToastComp.defaultProps = {
  position: 'bottom-center'
}

ToastComp.propTypes = {
  toastList: PropTypes.array.isRequired,
  position: PropTypes.string,
  autoDelete: PropTypes.bool,
  autoDeleteTime: PropTypes.number
}

export function ToastComp(props) {

  const {toastList, position } = props;
  const { autoDelete, autoDeleteTime } = props;
  const [list, setList] = useState(toastList);

  const deleteToast = id => {
    const index = list.findIndex(e => e.id === id);
    list.splice(index, 1);
    const toastListItem = toastList.findIndex(e => e.id === id);
    toastList.splice(toastListItem, 1);
    setList([...list]);

    };

    useEffect(() => {
        setList(toastList);
    }, [toastList, list]);

    useEffect(() => {
        const interval = setInterval(() => {
          if (autoDelete && toastList.length > 0 && list.length > 0) {
            const updatedList = [...list];
            const removedToast = updatedList.shift();
            deleteToast(removedToast.id);
          }
        }, autoDeleteTime);
      
        return () => {
          clearInterval(interval);
        };
      }, [list, autoDelete, autoDeleteTime, toastList]);

    return (
      <YStack
      //@ts-ignore
      pos="fixed"
      className={`notification-container ${position}`}
      >
        {list.map((toast) =>
          <XStack
            br="$2"
            p="$2"
            maw="100%"
            jc="center"
            key={toast.id}
            className={`notification toast ${position}`}
            bg={toast.backgroundColor}
            space="$2"
            >
            <YStack>
              <toast.icon size={30}/>
            </YStack>
            <YStack maw="80%" ai="flex-start" paddingRight="$2">
              <H5 >{toast.title}</H5>
              <Paragraph dangerouslySetInnerHTML={{ __html: toast.description.replace(/\n/g, "<br />") }}/>
            </YStack>
            <Button
            pos="absolute"
            t="$3" r="$3"
            size="$2"
            circular
            icon={X}
            bg={toast.backgroundColor}
            onPress={() => deleteToast(toast.id)}/>
          </XStack>
          )
        }
      </YStack>
    );
}