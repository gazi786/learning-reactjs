const express = require("express");
const mailer = require("./mailer");

const app = express();

app.get("/", (req, res) => {
	res.send(`
    <html>
      <head>
        <title>My NodeJS Server</title>
      </head>
      <body>
        <h1>Hello from my Node.js Server!</h1>
      </body>
    </html>
  `);
});

app.get("/api/greet", (req, res) => {
	res.send(`
		<html>
			<head>
				<title>My NodeJS Server</title>
				</head>
				<body>
					<h1>You have reached the greet portal</h1>
					<h2>API: /api/greet</h2>
					<p>Have a lovely day...!!!</p>
					</body>
					</html>
					`);
});

app.get("/api/userList", (req, res) => {
	const userList = [
		{ name: "john", age: 27 },
		{ name: "Mary", age: 22 },
		{ name: "Ethan", age: 17 },
		{ name: "Joe", age: 53 },
		{ name: "Amelia", age: 87 },
		{ name: "Adam", age: 34 },
	];

	res.json(userList);
});

app.get("/api/courses", (req, res) => {
	const courses = [
		{ id: 1, title: "Full Stack - Level 4", semester: "Fall" },
		{ id: 2, title: "Full Stack - Level 5", semester: "Spring" },
		{ id: 3, title: "Full Stack - Level 6", semester: "Summer" },
	];
	res.json(courses);
});

app.get("/api/sendEmail", async (req, res) => {
	try {
		await mailer();
		res.send(`
      <html>
        <head>
          <title>My NodeJS Server</title>
        </head>
        <body>
          <h1>Hello from my Node.js Server!</h1>
          <h2>Email sent successfully...!!!</h2>
        </body>
      </html>
    `);
	} catch (error) {
		console.error(error);
		res.status(500).send(`
      <html>
        <head>
          <title>My NodeJS Server</title>
        </head>
        <body>
          <h1>Hello from my Node.js Server!</h1>
          <h2>Error sending email...!!!</h2>
          <p>Check console for: ${error}</p>
        </body>
      </html>
    `);
	}
});

module.exports = app;
