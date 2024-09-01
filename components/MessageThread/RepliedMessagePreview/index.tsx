import React, { FC } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { IMessage } from "../../../types";

interface IRepliedMessagePreview {
  message: IMessage;
}

const RepliedMessagePreview: FC<IRepliedMessagePreview> = ({ message }) => {
  return (
    <View style={styles.container}>
      <View style={styles.empty}>
        <View style={styles.line1} />
      </View>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: message.avatar }} style={styles.avatar} />
        </View>
        <View style={styles.sender}>
          <Text style={styles.name}>{message.name}</Text>
          <Text
            style={styles.previewText}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {message.text}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  empty: {
    flex: 1,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    position: "relative",
  },
  header: {
    flex: 5,
    flexDirection: "row",
  },
  avatarContainer: {
    height: 25,
  },
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 20,
    flex: 1,
  },
  sender: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 6,
    marginLeft: 10,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
  },
  previewText: {
    color: "grey",
    marginLeft: 10,
    maxWidth: 210,
  },
  line1: {
    width: 42,
    height: 19,
    top: 10,
    position: "absolute",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: "grey",
  },
});

export default RepliedMessagePreview;
