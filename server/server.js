const express = require('express');
const http = require('http').Server(express);
const socketio = require('socket.io')(http, {
    cors: {
        origin: "*"
    },
    pingTimeout: 60000
});

let players = {
    player1: {
        "name": "Sebastian",
        "color": "green",
    },
    player2: {
        "name": "Adrian",
        "color": "blue",
    }
}

// new socket connection
socketio.on('connection', (socket) => {

    // emit all players to the client
    socket.emit("players", players);

    // receive players
    socket.on("addPlayer", data => {
        // add player to the players object
    })
});

http.listen(3030, () => {
    console.log('Server started on port 3030...');
});
