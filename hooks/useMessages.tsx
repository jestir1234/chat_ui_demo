import { useState, useEffect, useCallback } from "react";
import { v4 as uuid } from "uuid";
import { getMyId } from "../utils";
import { generateMockMessage } from "../mock";
import { SENDERS } from "../constants";
import { IMessage, IMockMessage } from "../types";

export function useMessages(initialMessages: IMockMessage[]) {
  const [messages, setMessages] = useState<IMockMessage[]>(initialMessages);
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [selectedMessage, setSelectedMessage] = useState<IMockMessage | null>(
    null
  );
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [messageThread, setMessageThread] = useState<IMessage | null>(null);

  useEffect(() => {
    // PERIODICALLY MOCK MESSAGES ---------------------------------------------------
    const mockMessageInterval = setInterval(() => {
      const mockMessage = generateMockMessage(messages[0]?.senderId);
      setMessages((prev) => [mockMessage, ...prev]);
    }, 12000);

    return () => clearInterval(mockMessageInterval);
  }, [messages]);

  const handleSendMessage = useCallback(() => {
    if (currentMessage.trim()) {
      const myId = getMyId();
      setMessages((prev) => [
        {
          senderId: myId,
          id: uuid(),
          text: currentMessage,
          timestamp: new Date(),
          isFirstMessage: messages[0]?.senderId !== myId,
        },
        ...prev,
      ]);
      setCurrentMessage("");
    }
  }, [currentMessage, messages]);

  const handleUpdateMessage = useCallback(() => {
    if (selectedMessage && currentMessage.trim()) {
      setMessages((prev) =>
        prev.map((message) =>
          message.id === selectedMessage.id
            ? {
                ...message,
                text: currentMessage,
                meta: { ...message.meta, edited: true },
              }
            : message
        )
      );
      setSelectedMessage(null);
      setCurrentMessage("");
    }
  }, [selectedMessage, currentMessage]);

  const handleUpdateReply = useCallback(
    (currentReply: string, selectedReply: IMessage, cb?: () => void) => {
      if (selectedMessage && currentReply.trim()) {
        setMessages((prev) =>
          prev.map((message) =>
            message.id === selectedMessage.id
              ? {
                  ...message,
                  meta: {
                    ...message.meta,
                    replies: message.meta?.replies?.map((reply) =>
                      reply.id === selectedReply.id
                        ? {
                            ...reply,
                            text: currentReply,
                            meta: { ...reply.meta, edited: true },
                          }
                        : reply
                    ),
                  },
                }
              : message
          )
        );
        cb?.();
      }
    },
    [selectedMessage]
  );

  const handleEmojiMessage = useCallback(
    (emoji: string) => {
      if (selectedMessage) {
        setMessages((prev) =>
          prev.map((message) =>
            message.id === selectedMessage.id
              ? { ...message, meta: { ...message.meta, emoji } }
              : message
          )
        );
        setSelectedMessage(null);
        setIsModalVisible(false);
      }
    },
    [selectedMessage]
  );

  const handleEmojiReply = useCallback(
    (emoji: string, selectedReply: IMessage, cb?: () => void) => {
      if (selectedMessage) {
        setMessages((prev) =>
          prev.map((message) =>
            message.id === selectedMessage.id
              ? {
                  ...message,
                  meta: {
                    ...message.meta,
                    replies: message.meta?.replies?.map((reply) =>
                      reply.id === selectedReply.id
                        ? { ...reply, meta: { ...reply.meta, emoji } }
                        : reply
                    ),
                  },
                }
              : message
          )
        );
        cb?.();
      }
    },
    [selectedMessage]
  );

  const handleDeleteMessage = useCallback(() => {
    if (selectedMessage) {
      setMessages((prev) => {
        let newFirstId: string | null = null;
        // We need to check if the deleted message is the first message
        // If so, we need to set first message onto the next message if the sender is the same
        if (selectedMessage.isFirstMessage) {
          prev.forEach((message, idx) => {
            if (message.id === selectedMessage.id && idx !== 0) {
              const nextMessage = prev[idx - 1];
              if (nextMessage.senderId === selectedMessage.senderId) {
                newFirstId = nextMessage.id;
              }
            }
          });
        }
        return prev
          .map((message) => {
            if (newFirstId !== null && message.id === newFirstId) {
              return { ...message, isFirstMessage: true };
            } else {
              return message;
            }
          })
          .filter((message) => message.id !== selectedMessage.id);
      });
      setSelectedMessage(null);
      setIsModalVisible(false);
    }
  }, [selectedMessage]);

  const handleDeleteReply = useCallback(
    (selectedReply: IMessage, cb?: () => void) => {
      if (selectedMessage) {
        setMessages((prev) =>
          prev.map((message) =>
            message.id === selectedMessage.id
              ? {
                  ...message,
                  meta: {
                    ...message.meta,
                    replies: message.meta?.replies?.filter(
                      (reply) => reply.id !== selectedReply.id
                    ),
                  },
                }
              : message
          )
        );
        cb?.();
      }
    },
    [selectedMessage]
  );

  const handleReplyMessage = useCallback(() => {
    if (selectedMessage) {
      setMessageThread({
        ...selectedMessage,
        ...SENDERS[selectedMessage.senderId],
      });
      setIsModalVisible(false);
    }
  }, [selectedMessage]);

  const handleAddReply = useCallback(
    (reply: IMessage) => {
      if (messageThread) {
        setMessages((prev) =>
          prev.map((message) =>
            message.id === messageThread.id
              ? {
                  ...message,
                  meta: {
                    ...message.meta,
                    replies: [...(message.meta?.replies || []), reply],
                  },
                }
              : message
          )
        );
      }
    },
    [messageThread]
  );

  return {
    messages,
    setMessages,
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
  };
}
