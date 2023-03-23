const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let data = [
	{
		"id": 1,
		"email": "alshafarazg@gmail.com",
		"password": "12345"
	},
	{
		"id": 2,
		"email": "alshafarazg@missionreadyhq.com",
		"password": "123456"
	}];


app.post("/login", (req, res) => {
	const { email, password } = req.body;

	// Check if email already exists in data
	const existingUser = data.find((user) => user.email === email);
	console.log("Existing user:", existingUser);
	if (!existingUser || existingUser.password !== password) {
		console.log("Invalid email or password");
		return res.status(400).json({ message: "Invalid email or password" });
	}
	console.log("Login successful");
	res.status(200).send(JSON.stringify({ message: "Login successful" }));
});





module.exports = app;
