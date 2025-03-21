const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 8080 });

server.on("connection", (ws) => {
  console.log("Cliente conectado!");

  // Função simulada de leitura de hardware
  function lerHardware() {
    return { timestamp: new Date().toISOString(), sensor: Math.random() };
  }

  const intervalo = setInterval(() => {
    const dados = lerHardware();
    ws.send(JSON.stringify(dados));
  }, 2000);

  ws.on("close", () => {
    clearInterval(intervalo);
    console.log("Cliente desconectado");
  });
});
