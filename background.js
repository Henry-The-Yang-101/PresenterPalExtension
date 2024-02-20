const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

server.on('connection', (socket) => {
  socket.on('message', (message) => {
    // Parse the message and trigger keypress emulation
    const data = JSON.parse(message);
    if (data.action === 'nextSlide') {
      console.log('next slide');
    } else if (data.action === 'nextSlide') {
      console.log('previous slide');
    }
  });
});