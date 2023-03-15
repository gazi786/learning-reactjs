const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.json("Hello World - GET response");
});
app.post("/", (req, res) => {
	res.json("Hello World - POST response");
});
app.delete("/", (req, res) => {
	res.json("Hello World - DELETE response");
});

module.exports = app;
