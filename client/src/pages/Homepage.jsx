import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ChatIcon from "@mui/icons-material/Chat";
import ChatbotPanel from "../components/chatBotPanel.jsx"
import { Fab }  from "@mui/material";
import Navbar from "../components/Navbar.jsx"
const MapWithChatbot = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
      <Navbar/>
      <MapContainer
        center={[20.5937, 78.9629]} // Center on India
        zoom={4}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>

      {/* Chatbot Floating Action Button */}
      <Fab
        color="primary"
        onClick={() => setChatOpen(true)}
        sx={{ position: "absolute", bottom: 16, right: 16 }}
      >
        <ChatIcon />
      </Fab>

      {/* Chatbot Dialog */}
   <ChatbotPanel open={chatOpen} onClose={() => setChatOpen(false)} />    </div>
  );
};

export default MapWithChatbot;
