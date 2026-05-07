const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

let players = {};

io.on("connection", (socket) => {
  console.log("Player joined:", socket.id);

  players[socket.id] = {
    x: 100 + Math.random() * 200,
    y: 100 + Math.random() * 200,
    hp: 100
  };

  socket.emit("players", players);

  socket.broadcast.emit("newPlayer", {
    id: socket.id,
    ...players[socket.id]
  });

  socket.on("move", (data) => {
    if (!players[socket.id]) return;

    players[socket.id].x = data.x;
    players[socket.id].y = data.y;

    io.emit("players", players);
  });

  socket.on("attack", () => {
    let attacker = players[socket.id];
    if (!attacker) return;

    for (let id in players) {
      if (id !== socket.id) {
        let target = players[id];

        let dx = target.x - attacker.x;
        let dy = target.y - attacker.y;

        if (Math.abs(dx) < 30 && Math.abs(dy) < 30) {
          target.hp -= 10;
          if (target.hp <= 0) {
            target.hp = 100;
            target.x = 100 + Math.random() * 200;
            target.y = 100 + Math.random() * 200;
          }
        }
      }
    }

    io.emit("players", players);
  });

  socket.on("chat", (msg) => {
    io.emit("chat", { id: socket.id, msg });
  });

  socket.on("disconnect", () => {
    console.log("Player left:", socket.id);
    delete players[socket.id];
    io.emit("players", players);
  });
});

server.listen(3000, () => {
  console.log(`${server} is running on port 3000`);
});