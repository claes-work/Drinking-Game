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


/**
 * Start a new socket connection
 */
socketio.on('connection', (socket) => {
    updatePlayers(socket)
    addPlayer(socket);
});


/**
 * Emit the players object to the client
 * @param socket
 */
function updatePlayers(socket) {
    // emit all players to the client
    socket.emit("players", players);
}


/**
 * Add a player to the players object
 * @param socket
 */
function addPlayer(socket) {
    // on addPlayer method call
    socket.on("addPlayer", data => {
        // get the players object length and increase it with one
        let count = Object.keys(players).length + 1;
        // add player to the players object
        players['player'+ count] = data;
        // emit all players to the client
        socket.emit("players", players);
    })
}


/**
 * Start the server on port 3030
 */
http.listen(3030, () => {
    console.log('Server started on port 3030...');
});
