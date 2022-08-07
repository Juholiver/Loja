const express = require('express');
const jsonServer = require('json-server');

const app = express();

const PORT = process.env.PORT || 8080;

app.use('/URL_API', jsonServer.router('banco-de-dados.json'));
app.use(express.static(__dirname + '/dist/app2'));


app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/app2/index.html')
});

app.listen(PORT, () => {
    console.log('Servidor iniciado na porta' + PORT)
});