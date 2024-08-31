import React, { FC } from "react";
import { IMockMessage } from "../../types";
import {
  StyleSheet,
  Modal,
  View,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

interface IMessageActionsModal {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedMessage: React.Dispatch<React.SetStateAction<IMockMessage | null>>;
  handleEmojiMessage: (emoji: string) => void;
  isOwnMessage?: boolean;
  handleEditMessage: () => void;
  handleDeleteMessage: () => void;
  handleReplyMessage: () => void;
}

const EMOJIS = ["👍", "😂", "❤️", "💯"];

const MessageActionsModal: FC<IMessageActionsModal> = ({
  isModalVisible,
  setIsModalVisible,
  handleEmojiMessage,
  isOwnMessage,
  handleEditMessage,
  handleDeleteMessage,
  handleReplyMessage,
  setSelectedMessage,
}) => {
  const handleClose = () => {
    setIsModalVisible(false);
    setSelectedMessage(null);
  };
  return (
    <Modal
      visible={isModalVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={handleClose}
    >
      <TouchableOpacity style={styles.modalOverlay} onPress={handleClose}>
        <TouchableWithoutFeedback>
          <View style={styles.modalContent}>
            <View style={styles.emojiContainer}>
              {EMOJIS.map((emoji) => (
                <TouchableOpacity
                  key={emoji}
                  style={styles.emojiButton}
                  onPress={() => handleEmojiMessage(emoji)}
                >
                  <Text style={styles.emojiText}>{emoji}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.actionsContainer}>
              {isOwnMessage && (
                <>
                  <TouchableOpacity
                    onPress={handleEditMessage}
                    style={styles.modalButton}
                  >
                    <Text style={styles.modalButtonText}>Edit Message</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={handleDeleteMessage}
                    style={styles.modalButton}
                  >
                    <Text style={styles.modalButtonText}>Delete Message</Text>
                  </TouchableOpacity>
                </>
              )}
              <TouchableOpacity
                onPress={handleReplyMessage}
                style={styles.modalButton}
              >
                <Text style={styles.modalButtonText}>Reply</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleClose}
                style={styles.modalButton}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "100%",
    height: "50%",
    padding: 20,
    backgroundColor: "#282b30",
    borderRadius: 30,
    alignItems: "center",
  },
  modalButton: {
    padding: 10,
    marginVertical: 5,
    width: "50%",
    backgroundColor: "#424549",
    borderRadius: 5,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  emojiContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  emojiText: {
    fontSize: 30,
  },
  emojiButton: {
    borderRadius: 50,
    backgroundColor: "#424549",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 7,
  },
  actionsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});

export default MessageActionsModal;
