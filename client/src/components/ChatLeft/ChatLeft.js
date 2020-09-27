import React from "react";
import "./ChatLeft.css";
import InfoBar from "../InfoBar/InfoBar";

const ChatLeft = () => {
  return (
    <div className="chatleft">
      <div className="chatleft__top">
        <InfoBar />
      </div>
      <div>Search Rooms here</div>
      <div>Rooms</div>
    </div>
  );
};

export default ChatLeft;
