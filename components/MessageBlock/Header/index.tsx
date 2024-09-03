import React, { FC, memo } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { formatDate } from "../../../utils";
import { IMessage } from "../../../types";

interface IHeader {
  message: IMessage;
}

const Header: FC<IHeader> = ({ message }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: message.avatar }} style={styles.avatar} />
        </View>
        <View style={styles.sender}>
          <Text style={styles.name}>{message.name}</Text>
          <Text style={styles.timestamp}>{formatDate(message.timestamp)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    paddingLeft: 5,
  },
  header: {
    flexDirection: "row",
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
});

export default memo(Header);
