const express = require ("express");
const app = express();

app.get('/', (req, res) =>{
    res.end('Hola Mundo');
});

app.get('/login', (req, res) =>{
    res.end('LOGIN');
});

app.listen(3000);
console.log("server port ", 3000);