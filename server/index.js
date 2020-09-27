const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const PORT = process.env.PORT || 5000;
const router = require("./router");
const app = express();

app.use(cors());
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    //add a user based on the socket Id to the room.
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    //emit or send admin event (message) from the backend to the frontend
    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to the room ${user.room}`,
    });

    //broadcast to a specific room
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined!` });

    //the user joins a room
    socket.join(user.room);

    io.to(user, room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  //expect a message from the front-end
  socket.on("sendMessage", (message, callback) => {
    //get specific user by the socket id
    const user = getUser(socket.id);

    //send the message to a specific user
    io.to(user.room).emit("message", { user: user.name, text: message });
    io.to(user.room).emit("roomData", {
      room: user.room,
      text: getUsersInRoom(user.room),
    });

    callback();
  });

  //clean up
  socket.on("disconnect", () => console.log("User just left"));
});

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
