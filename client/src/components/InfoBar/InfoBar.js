import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";

import "./InfoBar.css";

const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="infoBar__left">
        {room && (
          <>
            <span>&#9679;</span>
            <h3> {room}</h3>
          </>
        )}
        {!room && <Avatar />}
      </div>
      <div className="infoBar__right">
        {room && (
          <>
            <a href="/">
              <CloseIcon />
            </a>
          </>
        )}
        {!room && (
          <IconButton>
            <ChatIcon />
            <MoreVertRoundedIcon />
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default InfoBar;
