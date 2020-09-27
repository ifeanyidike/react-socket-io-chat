import React from "react";
import { Picker } from "emoji-mart";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";
import { IconButton } from "@material-ui/core";
import "./Input.css";
import "emoji-mart/css/emoji-mart.css";
import CloseIcon from "@material-ui/icons/Close";

const Input = ({ message, setMessage, sendMessage }) => {
  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);

    setMessage([message + emoji]);
  };

  const toggleEmoji = () => {
    document.querySelector(".span__emoji").classList.toggle("show");
  };

  const handleSubmit = (e) => {
    sendMessage(e);
    document.querySelector(".span__emoji").classList.remove("show");
  };

  return (
    <div className="input">
      <span className="span__emoji hide">
        <Picker onSelect={addEmoji} />
      </span>
      <div className="input__form">
        <IconButton className="input__emoticon">
          <InsertEmoticonIcon onClick={toggleEmoji} />
        </IconButton>
        <IconButton>
          <AttachFileIcon />
        </IconButton>

        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            autoFocus
            className="input__text"
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage(e)}
          />
          <button
            type="submit"
            className="input__button"
            onClick={(e) => sendMessage(e)}
          >
            Send
          </button>
        </form>

        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Input;
