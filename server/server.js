const Room   = require('./classes/model/Room.js');
const Player = require('./classes/model/Player.js');

const express = require('express');
const http = require('http').Server(express);
const io = require('socket.io')(http, {
    cors: {
        origin: '*'
    },
    pingTimeout: 60000
});

/**
 * Array of room objects
 * @type {*[]}
 */
let roomList = [];

/**
 * Start a new socket connection
 */
io.on('connection', (socket) => {

    // Check if Player is in party and if so redirect him

    // Check if submitted player data is valid and create a new room
    socket.on('createRoom', (username) => {
        let room = createRoom(username);
        roomList.push(room);
        socket.emit('room', room);
    });


});

/**
 * Start the server on port 3030
 */
http.listen(3030, () => {
    console.log('Server started on port 3030...');
});


/**
 * Check if submitted player data is valid and create a new room
 * @param username
 */
function createRoom(username) {

    let room = new Room(
        1,
        0,
        [1]
    );

    let player = new Player(
        1,
        username,
        room.assignColor(),
        0
    );

    room.addPlayer(player)
    return room;
}
