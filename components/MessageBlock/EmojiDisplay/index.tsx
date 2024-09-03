import React, { FC, memo } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { IMessage } from "../../../types";

interface IEmojiDisplay {
  message: IMessage;
}

const EmojiDisplay: FC<IEmojiDisplay> = ({ message }) => {
  return (
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
});

export default memo(EmojiDisplay);
