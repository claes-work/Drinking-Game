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

    socket.on('joinRoom', (data) => {
        joinRoom(socket, data);
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


/**
 * Compare each room code of the room list array with the room code that is handed over to the function
 * @param roomCode
 */
function getRoom(roomCode) {
    let room;
    for (let i = 0; i < roomList.length; i++) {
        (roomList[i]['roomCode'] === roomCode)
            ? room = roomList[i]
            : room = {}
    }
    return room
}


/**
 * Check if submitted player data is valid and join an existing room if so
 * @param socket
 * @param data
 */
function joinRoom(socket, data) {

    // the room object
    let room = getRoom(data['roomCode'])

    // Check if the entered room code exists
    if (Object.keys(room).length === 0) {
        socket.emit('error', 'Bitte geben Sie einen gültigen Raum Code an.');
        return;
    }

    // Check if the entered username has been taken
    for (let i = 0; i < room.playersArray.length; i++) {
        if (room.playersArray[i]['username'] === data['username']) {
            socket.emit('error', 'Der von Ihnen eingegebene Name wird bereits verwendet.');
            return;
        }
    }

    let player = new Player(
        1,
        data['username'],
        room.assignColor(),
        0
    );

    // push the new player to the submitted rooms players array
    room.playersArray.push(JSON.parse(JSON.stringify(player)))
}
