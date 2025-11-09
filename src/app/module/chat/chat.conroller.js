import { Chat } from "./chat.model.js";
import {
  deleteChatService,
  deleteMessageService,
  getChatService,
  sendMessageService,
} from "./chat.service.js";

// ✅ Send message (create chat if not exist)
export const sendMessage = async (req, res) => {
  try {
    const messageData = req.body;
    const chat = await sendMessageService(messageData);

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
      data: chat,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get chat between user and admin
export const getChat = async (req, res) => {
  try {
    const chat = await getChatService();
    res.status(200).json({ success: true, data: chat });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Delete a specific message
export const deleteMessage = async (req, res) => {
  try {
    const { chatId, messageId } = req.params;

    const chat = await deleteMessageService(chatId, messageId);

    res.status(200).json({
      success: true,
      message: "Message deleted successfully",
      data: chat,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Delete entire chat
export const deleteChat = async (req, res) => {
  try {
    const { chatId } = req.params;

    const deleted = await deleteChatService(chatId);
    res.status(200).json({
      success: true,
      message: "Chat deleted successfully",
      data: deleted,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const markAsRead = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedMessage = await Chat.findByIdAndUpdate(
      id,
      { isRead: true },
      { new: true }
    );

    if (!updatedMessage) {
      return res
        .status(404)
        .json({ success: false, message: "Message not found" });
    }

    res.status(200).json({ success: true, data: updatedMessage });
  } catch (error) {
    console.error("Error updating message:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
