// Node Server which will handle socket io connections

const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer();
const io = new Server(server, {
    cors: {
        origin: "*", // Adjust this to your client's origin in production
        methods: ["GET", "POST"]
    }
});

const users={};
io.on('connection',socket=>{
    socket.on('new-user-joined',name=>{
        //console.log("New user", name);
        users[socket.id] =name;
        socket.broadcast.emit('user-joined',name);
    });

    socket.on('send',message=>{
        socket.broadcast.emit('receive',{message: message,name: users[socket.id]});
    });
    socket.on('disconnect',message=>{
        socket.broadcast.emit('left',users[socket.id]);
        delete users[socket.id];
    });
    
});
// --- ADD THIS LINE ---
const PORT = 8000; // Define the port you want to use
server.listen(PORT, () => {
    console.log(`Socket.IO server listening on port ${PORT}`);
})