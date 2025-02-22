require('dotenv').config();
const http = require('http');
let PORT = 3000;
const API_CONFIG = JSON.stringify(
    {
        API_KEY: process.env.API_KEY,
        URL: `${process.env.URL}?api_key=${process.env.API_KEY}`
    }
)

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5500");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.url == '/config') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(API_CONFIG);
    } else {
        res.writeHead(400);
        res.end()
    }
})

server.listen(PORT, ()=> {
    console.log(`Server up at localhost:${PORT}`);
})