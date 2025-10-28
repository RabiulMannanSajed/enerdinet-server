import {
  deleteChatService,
  deleteMessageService,
  getChatService,
  sendMessageService,
} from "./chat.service.js";

// ✅ Send message (create chat if not exist)
export const sendMessage = async (req, res) => {
  try {
    const { senderId, receiverId, message } = req.body;

    if (!senderId || !receiverId || !message)
      return res
        .status(400)
        .json({ success: false, message: "Missing fields" });

    const chat = await sendMessageService(senderId, receiverId, message);

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
    const { userId, adminId } = req.params;

    const chat = await getChatService(userId, adminId);
    if (!chat)
      return res
        .status(404)
        .json({ success: false, message: "Chat not found" });

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
