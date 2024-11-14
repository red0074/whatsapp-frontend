import React from "react";
import "./SidebarChat.css";
import Avatar from "@mui/material/Avatar";
function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>this is last message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
