const io    = require('socket.io')(3300)

const users = {}

io.on('connection', socket => {
    console.log('New User')
    socket.emit('chat-message', 'Hello World')
})