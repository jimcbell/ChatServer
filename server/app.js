import express from "express";

import { Server } from "socket.io";
import { createServer } from "node:http";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("user connected:", socket.id);
  socket.on("disconnect", () => {
    console.log("user disconnected: ", socket.id);
  });
});

export { server };
