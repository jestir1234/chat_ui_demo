import React from "react";
import { Text, StyleSheet, Linking } from "react-native";

const FormmatedText: React.FC<{ text: string }> = ({ text }) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);

  const handlePress = (url: string) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      }
    });
  };

  return (
    <Text style={styles.text}>
      {parts.map((part, index) => {
        if (urlRegex.test(part)) {
          return (
            <Text
              key={index}
              style={styles.url}
              onPress={() => handlePress(part)}
            >
              {part}
            </Text>
          );
        } else {
          return part;
        }
      })}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 16,
  },
  url: {
    color: "#1E90FF",
    textDecorationLine: "underline",
  },
});

export default FormmatedText;
