const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

//look for ther enviroment variables if not avaible run in 5000
const port = process.env.port || 5000;
http.listen(port, () => {
    console.log(`Listining on port: ${port}`);
})

//calling files from public folder
app.use(express.static(__dirname + '/public/'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});


io.on('connection', (socket) => {
    console.log("A user is connected!");

    socket.on("disconect.", () =>{
        console.log("A user has left the chat room");
    });

    socket.on("my chat", (msg) => {
        console.log(msg);
        io.emit("my chat", msg);
    })

});




