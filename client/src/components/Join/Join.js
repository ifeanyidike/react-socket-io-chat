import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { Link } from "react-router-dom";
import "./Join.css";

export default function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <Container component="main" maxWidth="xs">
      <div className="join">
        <Avatar className="join__avatar" fontSize="large">
          <WhatsAppIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Join
        </Typography>
        <form className="join__form" noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(e) => setName(e.target.value)}
            label="Enter Your Name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(e) => setRoom(e.target.value)}
            label="Enter Your Room"
          />

          <Link
            onClick={(e) => (!name || !room) && e.preventDefault()}
            to={`/chat?name=${name}&room=${room}`}
          >
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="join__submit"
            >
              Start Chat
            </Button>
          </Link>
        </form>
      </div>
    </Container>
  );
}
