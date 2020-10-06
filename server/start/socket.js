const io = require('socket.io')();
io.listen(3333);
io.on('connection', function (socket) {
  console.log(socket.id)
})