const express = require('express');
const http = require('http').Server(express);
const socketio = require('socket.io')(http, {
    cors: {
        origin: "*"
    },
    pingTimeout: 60000
});


http.listen(3030, () => {
    console.log('Server started on port 3030...');
});
