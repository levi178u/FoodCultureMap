import React, { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  InputBase,
  Typography,
  Avatar,
  Divider,
} from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import useEmbeddings from "./hooks/useEmbeddings"; // <- default export assumed

const ChatbotPanel = ({ open, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    console.log( userMessage)
    try {
      const embeds = await useEmbeddings(input);
      console.log(embeds)
      const response = await axios.post("http://localhost:5000/api/rag/ask", {
        queryEmbedding: embeds,
        originalQuery: input,
      });

      const aiReply = response.data.reply;
      const botMessage = { sender: "bot", text: aiReply };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Something went wrong. Please try again." },
      ]);
    }
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          width: 360,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            backgroundColor: "#002D72",
            color: "white",
            px: 2,
            py: 1.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box display="flex" alignItems="center">
            <Avatar src="https://i.pravatar.cc/300" alt="Bot" sx={{ mr: 1 }} />
            <Box>
              <Typography variant="subtitle1">Chat with FM-Bot</Typography>
              <Typography variant="caption" sx={{ color: "#a2fca2" }}>
                We're here to make your imagination into reality
              </Typography>
            </Box>
          </Box>
          <Box>
            <IconButton sx={{ color: "white" }}>
              <SettingsIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }} onClick={onClose}>
              <ExpandMoreIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Messages */}
        <Box
          sx={{
            flex: 1,
            p: 2,
            overflowY: "auto",
            backgroundColor: "#f9f9f9",
          }}
        >
          {messages.map((msg, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                justifyContent:
                  msg.sender === "user" ? "flex-end" : "flex-start",
                mb: 1,
              }}
            >
              <Box
                sx={{
                  backgroundColor:
                    msg.sender === "user" ? "#cfe9ff" : "#e0e0e0",
                  p: 1.5,
                  borderRadius: 2,
                  maxWidth: "80%",
                  wordWrap: "break-word",
                }}
              >
                <Typography variant="body2">{msg.text}</Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Input */}
        <Divider />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            px: 2,
            py: 1,
            gap: 1,
            borderTop: "1px solid #ccc",
          }}
        >
          <IconButton>
            <InsertEmoticonIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <InputBase
            placeholder="Enter your message..."
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
            sx={{ backgroundColor: "#f5f5f5", px: 2, borderRadius: 4 }}
          />
          <IconButton color="primary" onClick={handleSend}>
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </Drawer>
  );
};

export default ChatbotPanel;
