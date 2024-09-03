import React, { FC, memo } from "react";
import { View, StyleSheet, Text } from "react-native";
import { IMessage } from "../../../types";
import { formatDate } from "../../../utils";

interface IRepliesDisplay {
  message: IMessage;
}

const RepliesDisplay: FC<IRepliesDisplay> = ({ message }) => {
  const lastReply = message?.meta?.replies
    ? message?.meta?.replies[message?.meta?.replies.length - 1]
    : null;
  return message.meta?.replies?.length ? (
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
  ) : null;
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
});

export default memo(RepliesDisplay);
