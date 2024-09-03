import React, {
  FC,
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { IMessage, IMockMessage } from "../../types";
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
  TouchableOpacity,
} from "react-native";
import { v4 as uuid } from "uuid";
import MessageBlock from "../MessageBlock";
import { getMyId } from "../../utils";
import { SENDERS } from "../../constants";
import useSwipeDown from "../../hooks/useSwipeDown";
import ReplyActionsPopup from "./ReplyActionsPopup";
import RepliedMessagePreview from "./RepliedMessagePreview";
import { generateMockMessage } from "../../mock";

interface IMessageThread {
  messageThread: IMessage | null;
  setMessageThread: (value: IMessage | null) => void;
  handleAddReply: (reply: IMessage) => void;
  setSelectedMessage: React.Dispatch<React.SetStateAction<IMockMessage | null>>;
  handleEmojiReply: (
    emoji: string,
    selectedReply: IMessage,
    cb?: () => void
  ) => void;
  handleUpdateReply: (
    currentReply: string,
    selectedReply: IMessage,
    cb?: () => void
  ) => void;
  handleDeleteReply: (selectedReply: IMessage, cb?: () => void) => void;
}

const MessageThread: FC<IMessageThread> = ({
  messageThread,
  setMessageThread,
  setSelectedMessage,
  handleAddReply,
  handleEmojiReply,
  handleUpdateReply,
  handleDeleteReply,
}) => {
  const {
    handleOuterTouchStart,
    handleOuterTouchMove,
    handleOuterTouchEnd,
    handleInnerScrollViewTouchStart,
    handleInnerScrollViewTouchEnd,
  } = useSwipeDown();

  const [currentReply, setCurrentReply] = useState<string>("");
  const [selectedReply, setSelectedReply] = useState<IMessage | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isReplying, setIsReplying] = useState<boolean>(false);
  const replyInputRef = useRef<TextInput>(null);
  const scrollViewRef = useRef<ScrollView>(null);

  const repliesHash = useMemo(() => {
    return (
      messageThread?.meta?.replies?.reduce(
        (acc: { [key: string]: IMessage }, val: IMessage) => {
          acc[val.id] = val;
          return acc;
        },
        {}
      ) || {}
    );
  }, [messageThread?.meta?.replies]);

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
      replyToId: isReplying && selectedReply ? selectedReply.id : undefined,
      ...SENDERS[myID],
    });
    cleanup();
    scrollToBottom();
  };

  const renderReplies = () => {
    const replies = messageThread?.meta?.replies
      ? messageThread.meta?.replies.map((message) => (
          <TouchableOpacity
            style={styles.replyBlock}
            key={message.id}
            onLongPress={() => handleSelectReply(message)}
          >
            {selectedReply?.id === message.id && (
              <ReplyActionsPopup
                isEditing={isEditing}
                canEdit={message.senderId === getMyId()}
                setIsEditing={setIsEditing}
                setIsReplying={setIsReplying}
                handleEmojiReply={handleEmojiReply}
                selectedReply={selectedReply}
                handleInputFocus={handleInputFocus}
                handleDeleteReply={handleDeleteReply}
                onClose={() => setSelectedReply(null)}
              />
            )}
            {message.replyToId ? (
              <RepliedMessagePreview message={repliesHash[message.replyToId]} />
            ) : null}
            <MessageBlock
              message={{ ...message, isFirstMessage: true }}
              isSelected={selectedReply?.id === message.id}
            />
          </TouchableOpacity>
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
    const swipeDetected = handleOuterTouchEnd();
    if (swipeDetected) {
      handleClose();
    }
  };

  const handleClose = () => {
    setMessageThread(null);
    setSelectedMessage(null);
  };

  const handleSelectReply = useCallback((message: IMessage) => {
    setSelectedReply(message);
  }, []);

  const handleInputFocus = () => {
    replyInputRef.current?.focus();
  };

  const handleSendReplyEdit = () => {
    if (selectedReply) {
      handleUpdateReply(currentReply, selectedReply, cleanup);
    }
  };

  const cleanup = () => {
    setSelectedReply(null);
    setCurrentReply("");
  };

  const getInputPlaceholder = () => {
    let preText = "Type";
    if (isEditing) {
      preText = "Edit";
    }

    if (isReplying) {
      preText = "Reply to";
    }
    return `${preText} a message...`;
  };

  const inputPretext = useMemo(
    () => getInputPlaceholder(),
    [isEditing, isReplying]
  );
  const screenHeight = Dimensions.get("window").height;

  // PERIODICALLY MOCK REPLIES ---------------------------------------------------
  useEffect(() => {
    const mockRepliesInterval = setInterval(() => {
      let randomReplyIdx = 0;
      const mockReply = generateMockMessage();
      const shouldReply =
        messageThread?.meta?.replies?.length &&
        Math.floor(Math.random() * 10) > 5;
      if (shouldReply && messageThread?.meta?.replies?.length) {
        randomReplyIdx = Math.floor(
          Math.random() * messageThread?.meta?.replies?.length
        );
      }
      handleAddReply({
        ...mockReply,
        ...SENDERS[mockReply.senderId],
        replyToId:
          shouldReply && messageThread?.meta?.replies?.length
            ? messageThread?.meta?.replies[randomReplyIdx].id
            : undefined,
      });
    }, 5000);

    if (!messageThread) {
      clearInterval(mockRepliesInterval);
    }

    return () => clearInterval(mockRepliesInterval);
  }, [messageThread]);
  return (
    <Modal
      visible={!!messageThread}
      transparent={true}
      animationType="slide"
      onRequestClose={handleClose}
    >
      <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
        {messageThread && (
          <SafeAreaView>
            <ScrollView
              onTouchStart={handleOuterTouchStart}
              onTouchMove={handleOuterTouchMove}
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
                  onTouchStart={handleInnerScrollViewTouchStart}
                  onTouchEnd={handleInnerScrollViewTouchEnd}
                >
                  {renderReplies()}
                </ScrollView>
                <View style={[styles.inputContainer]}>
                  <TextInput
                    ref={replyInputRef}
                    value={currentReply}
                    onChangeText={setCurrentReply}
                    onSubmitEditing={
                      isEditing ? handleSendReplyEdit : submitReply
                    }
                    placeholder={inputPretext}
                    placeholderTextColor="#888"
                    style={styles.input}
                    autoFocus={true}
                    onPress={() => setSelectedReply(null)}
                  />
                  <Button
                    title="Send"
                    color="#fff"
                    onPress={isEditing ? handleSendReplyEdit : submitReply}
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
  replyBlock: {
    position: "relative",
  },
});

export default MessageThread;
