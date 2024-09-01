import React, { useRef, useEffect, FC, useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Animated,
} from "react-native";
import { EMOJIS } from "../../../constants";
import { IMessage } from "../../../types";

interface IReplyActionsPopup {
  handleEmojiReply: (
    emoji: string,
    selectedReply: IMessage,
    cb?: () => void
  ) => void;
  selectedReply: IMessage;
  onClose: () => void;
  handleInputFocus: () => void;
  handleDeleteReply: (selectedReply: IMessage, cb?: () => void) => void;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setIsReplying: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReplyActionsPopup: FC<IReplyActionsPopup> = ({
  selectedReply,
  handleEmojiReply,
  handleInputFocus,
  handleDeleteReply,
  onClose,
  isEditing,
  setIsEditing,
  setIsReplying,
}) => {
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 5,
      tension: 40,
      useNativeDriver: true,
    }).start();

    return () => {
      setIsEditing(false);
    };
  }, [scaleValue]);

  const handleEditPress = () => {
    handleInputFocus();
    setIsEditing(true);
  };

  const handleReplyPress = () => {
    handleInputFocus();
    setIsReplying(true);
  };

  return (
    <Animated.View
      style={[styles.container, { transform: [{ scale: scaleValue }] }]}
    >
      {EMOJIS.map((emoji) => (
        <TouchableOpacity
          key={emoji}
          onPress={() => handleEmojiReply(emoji, selectedReply, onClose)}
        >
          <Text>{emoji}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={handleEditPress}>
        <Text
          style={[
            styles.actionText,
            {
              color: isEditing ? "lightblue" : "white",
              fontWeight: isEditing ? "bold" : 500,
            },
          ]}
        >
          Edit
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleDeleteReply(selectedReply, onClose)}
      >
        <Text style={styles.actionText}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleReplyPress()}>
        <Text style={styles.actionText}>Reply</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    gap: 5,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#fff",
    backgroundColor: "rgba(114, 137, 218, .8)",
    padding: 8,
    width: "80%",
    right: 0,
    top: 0,
    zIndex: 1,
  },
  actionText: {
    color: "#fff",
  },
});

export default ReplyActionsPopup;
