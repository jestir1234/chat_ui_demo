import React, { FC, useEffect, useState, useMemo, memo } from "react";
import { View, StyleSheet } from "react-native";
import { extractUrl, isImageUrl } from "../../utils";
import { IMessage } from "../../types";
import Header from "./Header";
import MessageContent from "./MessageContent";
import ImagePreview from "./ImagePreview";
import EmojiDisplay from "./EmojiDisplay";
import RepliesDisplay from "./RepliesDisplay";
export interface IMessageBlock {
  message: IMessage;
  isSelected?: boolean;
}

const MessageBlock: FC<IMessageBlock> = ({ message, isSelected }) => {
  const [imgPreviewUrl, setImgPreviewUrl] = useState<string | null>(null);
  const { text } = message;
  const url = useMemo(() => extractUrl(text), [text]);

  const setImagePreview = async () => {
    if (url) {
      const isImage = await isImageUrl(url);
      if (isImage) {
        setImgPreviewUrl(url);
      }
    }
  };

  useEffect(() => {
    if (url) {
      setImagePreview();
    }
  }, [url]);

  return (
    <View style={styles.messageBlockContainer}>
      {isSelected && <View style={styles.highlightOverlay} />}
      {message.isFirstMessage && <Header message={message} />}
      <MessageContent message={message} />
      <ImagePreview imgPreviewUrl={imgPreviewUrl} />
      <EmojiDisplay message={message} />
      <RepliesDisplay message={message} />
    </View>
  );
};

const styles = StyleSheet.create({
  messageBlockContainer: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  highlightOverlay: {
    width: "100%",
    position: "absolute",
    height: "100%",
    backgroundColor: "#fff",
    opacity: 0.1,
  },
});

export default memo(MessageBlock);
