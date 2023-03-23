const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

let jsonReader = (filePath, cb) => {
	console.log('Reading file:', filePath);
	fs.readFile(filePath, "utf8", (err, data) => {
		if (err) {
			return cb && cb(err);
		}
		try {
			const obj = JSON.parse(data);
			return cb && cb(null, obj);
		} catch (err) {
			return cb && cb(err);
		}
	});
};




app.post("/login", (req, res) => {
	const { email, password } = req.body;

	jsonReader("./data.json", (err, data) => {
		if (err) {
			console.log(err);
			return res.status(500).send("Error reading file");
		}

		console.log("Data read from file:", data);

		// Check if email already exists in data
		const existingUser = Object.values(data).find(user => user.email === email);
		if (!existingUser || existingUser.password !== password) {
			console.log("Invalid email or password");
			return res.status(400).send("Invalid email or password");
		}
		console.log("Login successful");
		res.redirect('http://127.0.0.1:5500/server/dist/form/loggedIn.html', target = '_blank');
	});
});

app.post("/register", (req, res) => {
	const { email, password } = req.body;

	jsonReader("./data.json", (err, data) => {
		if (err) {
			console.log(err);
			return res.status(500).send("Error reading file");
		}

		console.log("Data read from file:", data);

		console.log("Email is new, creating new user");

		// Create new user
		const newUser = {
			id: Object.keys(data).length + 1,
			email,
			password
		};

		// Add new user to data
		data[newUser.id] = newUser;


		console.log("New user added to data:", newUser);

		// Write updated data to file
		fs.writeFile("./data.json", JSON.stringify(data, null, 2), (err) => {
			if (err) {
				console.log(err);
				return res.status(500).send("Error writing file");
			}
			console.log("Data written to file");
			res.redirect('http://127.0.0.1:5500/server/dist/form/loggedIn.html');
		});
	});
});

module.exports = app;
