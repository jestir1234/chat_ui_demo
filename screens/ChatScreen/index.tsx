import { FC, useEffect, useMemo, useRef, useCallback } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TextInput,
  View,
  Button,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import MessageBlock from "../../components/MessageBlock";
import { getMyId } from "../../utils";
import { SENDERS } from "../../constants";
import "react-native-get-random-values";
import { generateMockMessages } from "../../mock";
import MessageActionsModal from "../../components/MessageActionsModal";
import MessageThread from "../../components/MessageThread";
import { IMockMessage } from "../../types";
import { useMessages } from "../../hooks/useMessages";

const MOCK_DATA: IMockMessage[] = generateMockMessages();

const ChatScreen: FC = () => {
  // States
  const {
    messages,
    currentMessage,
    setCurrentMessage,
    handleSendMessage,
    handleUpdateMessage,
    selectedMessage,
    setSelectedMessage,
    isModalVisible,
    setIsModalVisible,
    handleEmojiMessage,
    handleDeleteMessage,
    handleReplyMessage,
    messageThread,
    setMessageThread,
    handleAddReply,
    handleEmojiReply,
    handleUpdateReply,
    handleDeleteReply,
  } = useMessages(MOCK_DATA);

  // Refs
  const chatWindowRef = useRef<any>(null);
  const textInputRef = useRef<TextInput>(null);

  const scrollToBottom = () => {
    chatWindowRef.current?.scrollToEnd();
  };

  const openMessageActions = (message: IMockMessage) => {
    setSelectedMessage(message);
    setIsModalVisible(true);
  };

  const handleEditMessage = useCallback(() => {
    setCurrentMessage(selectedMessage?.text as string);
    setIsModalVisible(false);
    setTimeout(() => textInputRef.current?.focus(), 200);
  }, [selectedMessage]);

  const getThreadMessageFromMessages = () => {
    const found = messages.find((message) => message.id === messageThread?.id);
    if (found) {
      return { ...found, ...SENDERS[found.senderId] };
    }
    return null;
  };

  const renderItem = ({ item }: { item: IMockMessage }) => {
    return (
      <TouchableOpacity
        onLongPress={() => openMessageActions(item)}
        activeOpacity={0.6}
      >
        <MessageBlock
          message={{ ...item, ...SENDERS[item.senderId] }}
          isSelected={selectedMessage?.id === item.id}
        />
      </TouchableOpacity>
    );
  };

  const listKeyExtract = (item: IMockMessage) => item.id;

  useEffect(() => {
    // Scroll to the bottom when the component mounts
    scrollToBottom();
  }, []);

  const threadMessage = useMemo(
    () => getThreadMessageFromMessages(),
    [messageThread?.id, messages]
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <SafeAreaView>
        <FlatList
          inverted
          removeClippedSubviews={true}
          maxToRenderPerBatch={10}
          windowSize={5}
          initialNumToRender={20}
          style={styles.chatWindow}
          ref={chatWindowRef}
          data={messages}
          keyExtractor={listKeyExtract}
          keyboardShouldPersistTaps="handled"
          scrollEventThrottle={400}
          renderItem={renderItem}
        />
        <View style={styles.inputContainer}>
          <TextInput
            ref={textInputRef}
            value={currentMessage}
            onChangeText={setCurrentMessage}
            onSubmitEditing={
              selectedMessage ? handleUpdateMessage : handleSendMessage
            }
            placeholder="Type a message..."
            placeholderTextColor="#888"
            style={styles.input}
            autoFocus={true}
          />
          <Button
            title="Send"
            color="#fff"
            onPress={selectedMessage ? handleUpdateMessage : handleSendMessage}
            disabled={!currentMessage.trim()}
          />
        </View>
      </SafeAreaView>
      <MessageActionsModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        setSelectedMessage={setSelectedMessage}
        handleEmojiMessage={handleEmojiMessage}
        isOwnMessage={
          !!selectedMessage && selectedMessage.senderId === getMyId()
        }
        handleEditMessage={handleEditMessage}
        handleDeleteMessage={handleDeleteMessage}
        handleReplyMessage={handleReplyMessage}
      />
      <MessageThread
        messageThread={threadMessage}
        setMessageThread={setMessageThread}
        handleAddReply={handleAddReply}
        setSelectedMessage={setSelectedMessage}
        handleEmojiReply={handleEmojiReply}
        handleUpdateReply={handleUpdateReply}
        handleDeleteReply={handleDeleteReply}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    borderTopWidth: 1,
    backgroundColor: "#1e2124",
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
  chatWindow: {
    borderWidth: 2,
    borderTopColor: "#1e2124",
    borderBottomColor: "transparent",
  },
});

export default ChatScreen;
