const http = require("http");
http.createServer((req, res)=>{
    rest.write(`<h1>Hola desde Node js</h1>`);
    res.end();
}).listenerCount(3000);