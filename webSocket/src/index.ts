import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function (socket) {
  console.log("user connected");

  socket.on("message", (e) => {
    const message = e.toString();
    if (message === "ping") {
      socket.send("pong");
    } else {
      socket.send(`You sent: ${message}`);
    }
  });
});
