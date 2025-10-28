import { Chat } from "./chat.model.js";

// ✅ Create or send a message
export const sendMessageService = async (senderId, receiverId, message) => {
  let chat = await Chat.findOne({
    participants: { $all: [senderId, receiverId] },
  });

  if (!chat) {
    chat = new Chat({ participants: [senderId, receiverId], messages: [] });
  }

  chat.messages.push({ senderId, receiverId, message });
  await chat.save();

  return chat;
};

// ✅ Get chat between two users
export const getChatService = async (userId, adminId) => {
  const chat = await Chat.findOne({
    participants: { $all: [userId, adminId] },
  }).populate("messages.senderId messages.receiverId", "name email");

  return chat;
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
