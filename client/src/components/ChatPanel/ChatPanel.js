import React, { useState } from "react";
import "./ChatPanel.css";

import ChatLeft from "../ChatLeft/ChatLeft";
import ChatRight from "../ChatRight/ChatRight";

const ChatPanel = ({ location }) => {
  return (
    <div className="chatpanel">
      {/* <div className="chatpanel__left">
        <ChatLeft />
      </div> */}
      <div className="chatpanel__right">
        <ChatRight location={location} />
      </div>
    </div>
  );
};

export default ChatPanel;
