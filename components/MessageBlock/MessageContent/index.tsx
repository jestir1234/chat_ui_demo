import React, { FC, memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import FormattedText from "../FormattedText";
import { IMessage } from "../../../types";

interface IMessageContent {
  message: IMessage;
}

const MessageContent: FC<IMessageContent> = ({ message }) => {
  return (
    <View style={styles.contentBlock}>
      <View style={styles.emptySpace} />
      <Text style={styles.messageText}>
        <FormattedText text={message.text} />{" "}
        <Text style={styles.edited}>
          {message?.meta?.edited ? "(edited)" : ""}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contentBlock: {
    flexDirection: "row",
    marginRight: 5,
    maxHeight: 150,
    overflow: "hidden",
  },
  emptySpace: {
    flex: 1,
  },
  messageText: {
    flex: 5,
    color: "#fff",
    marginLeft: "auto",
  },
  edited: {
    color: "#888",
    fontSize: 10,
  },
});

export default memo(MessageContent);
