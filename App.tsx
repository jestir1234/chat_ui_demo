import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ChatScreen from "./screens/ChatScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ChatScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e2124",
    alignItems: "center",
    justifyContent: "center",
  },
});
