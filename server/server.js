const express = require('express');
const http = require('http').Server(express);
const socketio = require('socket.io')(http, {
    cors: {
        origin: "*"
    },
    pingTimeout: 60000
});
