import React, { FC, useEffect, useState, useMemo, memo } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { formatDate, extractUrl, isImageUrl } from "../../utils";
import FormmatedText from "./FormattedText";
import { IMessage } from "../../types";
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

  const lastReply = message?.meta?.replies
    ? message?.meta?.replies[message?.meta?.replies.length - 1]
    : null;
  return (
    <View style={styles.messageBlockContainer}>
      {isSelected && <View style={styles.highlightOverlay} />}
      {message.isFirstMessage && (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.avatarContainer}>
              <Image source={{ uri: message.avatar }} style={styles.avatar} />
            </View>
            <View style={styles.sender}>
              <Text style={styles.name}>{message.name}</Text>
              <Text style={styles.timestamp}>
                {formatDate(message.timestamp)}
              </Text>
            </View>
          </View>
        </View>
      )}
      <View style={styles.contentBlock}>
        <View style={styles.emptySpace} />
        <Text style={styles.messageText}>
          <FormmatedText text={text} />{" "}
          <Text style={styles.edited}>
            {message?.meta?.edited ? "(edited)" : ""}
          </Text>
        </Text>
      </View>
      <View style={styles.contentBlock}>
        <View style={styles.emptySpace} />
        {imgPreviewUrl && (
          <Image
            style={styles.imagePreview}
            source={{ uri: imgPreviewUrl }}
            resizeMode="contain"
          />
        )}
      </View>
      <View style={styles.contentBlock}>
        <View style={styles.emptySpace} />
        <View style={styles.emojisContainer}>
          {message.meta?.emoji ? (
            <TouchableOpacity style={styles.emojiDisplay}>
              <Text>{message.meta?.emoji}</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      {message.meta?.replies?.length ? (
        <View style={styles.contentBlock}>
          <View style={styles.emptySpace} />
          <View style={styles.repliesCount}>
            <Text style={styles.repliesCountText}>
              {`${message.meta?.replies.length} ${
                message.meta?.replies.length > 1 ? "replies" : "reply"
              } `}
              {lastReply && (
                <Text style={styles.lastReplyTimestamp}>
                  {`last reply: ${formatDate(lastReply?.timestamp)}`}
                </Text>
              )}
            </Text>
          </View>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  messageBlockContainer: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  container: {
    display: "flex",
    width: "100%",
    paddingLeft: 5,
  },
  header: {
    flexDirection: "row",
  },
  sender: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 6,
  },
  timestamp: {
    fontSize: 12,
    color: "#d5e2e3",
    marginLeft: 8,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
  },
  avatarContainer: {
    flex: 1,
    height: 40,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    flex: 1,
  },
  contentBlock: {
    flexDirection: "row",
    marginRight: 5,
    maxHeight: 150,
    overflow: "hidden",
  },
  messageText: {
    flex: 5,
    color: "#fff",
    marginLeft: "auto",
  },
  emptySpace: {
    flex: 1,
  },
  imagePreview: {
    flex: 5,
    height: 200,
    borderRadius: 5,
    marginTop: 5,
    maxWidth: "80%",
    marginRight: 10,
  },
  emojisContainer: {
    flex: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  emojiDisplay: {
    width: 40,
    backgroundColor: "#36393e",
    borderRadius: 30,
    padding: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  edited: {
    color: "#888",
    fontSize: 10,
  },
  repliesCount: {
    flex: 5,
    marginBottom: 5,
  },
  repliesCountText: {
    color: "lightblue",
  },
  lastReplyTimestamp: {
    fontSize: 10,
    color: "grey",
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
