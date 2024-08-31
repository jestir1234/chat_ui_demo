import React, { FC, useRef, useState, useEffect } from "react";
import { IMessage } from "../../types";
import {
  View,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  SafeAreaView,
  Dimensions,
  KeyboardAvoidingView,
  Button,
} from "react-native";
import { v4 as uuid } from "uuid";
import MessageBlock from "../MessageBlock";
import { getMyId } from "../../utils";
import { SENDERS } from "../../constants";
import useSwipeDown from "../../hooks/useSwipeDown";

interface IMessageThread {
  messageThread: IMessage | null;
  setMessageThread: (value: IMessage | null) => void;
  handleAddReply: (reply: IMessage) => void;
}

const MessageThread: FC<IMessageThread> = ({
  messageThread,
  setMessageThread,
  handleAddReply,
}) => {
  const { handleTouchStart, handleTouchMove, handleTouchEnd, isSwipingDown } =
    useSwipeDown();
  const [currentReply, setCurrentReply] = useState<string>("");
  const replyInputRef = useRef<TextInput>(null);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    setCurrentReply("");
  }, [messageThread?.id]);

  const submitReply = () => {
    const myID = getMyId();
    handleAddReply({
      senderId: myID,
      id: uuid(),
      text: currentReply,
      timestamp: new Date(),
      ...SENDERS[myID],
    });
    setCurrentReply("");
    scrollToBottom();
  };

  const renderReplies = () => {
    const replies = messageThread?.meta?.replies
      ? messageThread.meta?.replies.map((message) => (
          <MessageBlock
            message={{ ...message, isFirstMessage: true }}
            key={message.id}
          />
        ))
      : null;

    return replies;
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 200);
  };

  const handleSwipeDown = () => {
    const swipeDetected = handleTouchEnd();
    if (swipeDetected) {
      setMessageThread(null);
    }
  };
  const screenHeight = Dimensions.get("window").height;

  return (
    <Modal
      visible={!!messageThread}
      transparent={true}
      animationType="slide"
      onRequestClose={() => setMessageThread(null)}
    >
      <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
        {messageThread && (
          <SafeAreaView>
            <ScrollView
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleSwipeDown}
              contentContainerStyle={{ flexGrow: 1 }}
            >
              <View style={[styles.modalContent, { height: screenHeight }]}>
                <Text style={styles.header}>Thread</Text>
                <View style={[styles.rootMessage]}>
                  <MessageBlock
                    message={{ ...messageThread, isFirstMessage: true }}
                  />
                </View>
                <View style={styles.repliesHeader}>
                  <Text style={styles.repliesTitle}>
                    Replies {messageThread.meta?.replies?.length}
                  </Text>
                  <View style={styles.line}></View>
                </View>

                <ScrollView
                  style={[styles.repliesContainer, { flexGrow: 0 }]}
                  ref={scrollViewRef}
                >
                  {renderReplies()}
                </ScrollView>
                <View style={[styles.inputContainer]}>
                  <TextInput
                    ref={replyInputRef}
                    value={currentReply}
                    onChangeText={setCurrentReply}
                    onSubmitEditing={submitReply}
                    placeholder="Type a message..."
                    placeholderTextColor="#888"
                    style={styles.input}
                    autoFocus={true}
                  />
                  <Button
                    title="Send"
                    color="#fff"
                    onPress={submitReply}
                    disabled={!currentReply.trim()}
                  />
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        )}
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    width: "100%",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "100%",
    height: "100%",
    minHeight: "100%",
    backgroundColor: "#282b30",
    borderRadius: 30,
    alignItems: "flex-start",
  },
  rootMessage: {
    width: "100%",
    flexShrink: 1,
  },
  header: {
    color: "#fff",
    fontSize: 25,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  repliesHeader: {
    width: "100%",
    marginTop: 20,
  },
  repliesTitle: {
    color: "#fff",
    marginLeft: 20,
  },
  line: {
    backgroundColor: "#fff",
    height: 1,
    width: "90%",
    margin: 10,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    borderTopWidth: 1,
    backgroundColor: "#1e2124",
    width: "100%",
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    marginRight: 10,
    color: "#fff",
  },
  repliesContainer: {
    width: "100%",
    minHeight: 100,
    maxHeight: 300,
  },
});

export default MessageThread;
