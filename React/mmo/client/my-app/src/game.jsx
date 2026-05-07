import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

const Game = () => {
  const canvasRef = useRef(null);

  const [players, setPlayers] = useState({});
  const [myId, setMyId] = useState(null);
  const [chat, setChat] = useState("");
  const [messages, setMessages] = useState([]);

  // CONNECT + SOCKET EVENTS
  useEffect(() => {
    socket.on("connect", () => {
      setMyId(socket.id);
    });

    socket.on("players", (data) => {
      setPlayers(data);
    });

    socket.on("chat", (data) => {
      setMessages((prev) => [...prev, `${data.id}: ${data.msg}`]);
    });

    return () => socket.off();
  }, []);

  // MOVEMENT
  useEffect(() => {
    const handleKey = (e) => {
      if (!players[myId]) return;

      let p = { ...players[myId] };

      if (e.key === "w") p.y -= 5;
      if (e.key === "s") p.y += 5;
      if (e.key === "a") p.x -= 5;
      if (e.key === "d") p.x += 5;

      if (e.key === " ") socket.emit("attack");

      socket.emit("move", p);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [players, myId]);

  // DRAW LOOP
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const draw = () => {
      ctx.clearRect(0, 0, 800, 600);

      // GRID
      for (let x = 0; x < 800; x += 40) {
        for (let y = 0; y < 600; y += 40) {
          ctx.strokeRect(x, y, 40, 40);
        }
      }

      // PLAYERS
      Object.keys(players).forEach((id) => {
        const p = players[id];

        ctx.fillStyle = id === myId ? "blue" : "red";
        ctx.fillRect(p.x, p.y, 20, 20);

        ctx.fillStyle = "black";
        ctx.fillText(`HP:${p.hp}`, p.x, p.y - 5);
      });

      requestAnimationFrame(draw);
    };

    draw();
  }, [players, myId]);

  // CHAT SEND
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!chat.trim()) return;

    socket.emit("chat", chat);
    setChat("");
  };

  return (
    <div style={{ display: "flex", gap: "20px", padding: "10px" }}>
      
      {/* GAME CANVAS */}
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        style={{ border: "2px solid black" }}
      />

      {/* CHAT UI */}
      <div style={{ width: "300px" }}>
        <div
          style={{
            height: "500px",
            overflowY: "auto",
            border: "1px solid black",
            padding: "5px",
            marginBottom: "10px",
          }}
        >
          {messages.map((msg, index) => (
            <div key={index}>{msg}</div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <input
            value={chat}
            onChange={(e) => setChat(e.target.value)}
            placeholder="Type message..."
            style={{ width: "100%", padding: "5px" }}
          />
        </form>
      </div>

    </div>
  );
};

export default Game;