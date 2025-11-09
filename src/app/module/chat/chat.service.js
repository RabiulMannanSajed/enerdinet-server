import { Chat } from "./chat.model.js";

// ✅ Create or send a message
export const sendMessageService = async (messageData) => {
  return await Chat.create(messageData);
};

// ✅ Get chat between two users
export const getChatService = async () => {
  return await Chat.find();
};

// ✅ Delete a specific message
export const deleteMessageService = async (chatId, messageId) => {
  const chat = await Chat.findById(chatId);
  if (!chat) throw new Error("Chat not found");

  chat.messages = chat.messages.filter(
    (msg) => msg._id.toString() !== messageId
  );

  await chat.save();
  return chat;
};

// ✅ Delete entire chat
export const deleteChatService = async (chatId) => {
  const deletedChat = await Chat.findByIdAndDelete(chatId);
  if (!deletedChat) throw new Error("Chat not found");
  return deletedChat;
};
