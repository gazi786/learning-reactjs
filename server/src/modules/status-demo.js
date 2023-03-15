const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());


app.get('/', (req, res) => {
	res.json('Hello World from root URI!');
});

app.get('/hello', (req, res) => {
	res.json('Hello World from hello URI!');
	console.log(req.method, req.url, new Date().toISOString());
});
app.get('/stupidRequest', (req, res) => {
	res.status(400).json('Why you being stupid?');

});

module.exports = app;
