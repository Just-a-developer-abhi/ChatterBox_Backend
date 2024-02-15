const http=require("http");
const express =require("express");
const cors = require("cors");
const socketID = require("socket.io");
const app=express();


const server=http.createServer(app);
const io=socketID(server);
const port=4500 || process.env.PORT ;

app.use(cors());
app.get("/", (req, res) =>{
    res.send("TOLDYA!!!!")
})

io.on("connection", (socket)=>{
    console.log("New Connection");
    socket.on('joined', ({user})=>{
    console.log(`${user} has joined`);
    })
})

server.listen(port, ()=>{
    console.log(`server is working on ${port}`);
})