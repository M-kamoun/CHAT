const express = require("express");
const app = express();

//!dotenv config
require("dotenv").config();
//!port definition
const port = process.env.PORT;

//! cors
const cors = require("cors");

//! Mongoose connection to MongoDB
require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }), cors());

require("./routes/chat.routes")(app);

const server = app.listen(port, () =>
  console.log(`Listening on port: ${port}`)
);

const io = require("socket.io")(server, { cors: true });

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("chat", (chat) => {
    io.emit("chat", chat);

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});
