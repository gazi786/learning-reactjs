const http = require("http");
const mailer = require("./mailer");

const api = http.createServer(async (req, res) => {
	if (req.url === "/" || req.url === "/home" || req.url === "/index") {
		res.setHeader("Content-Type", "text/html");
		res.write(`<html>
					<head>
						<title>My NodeJS Server</title>
					</head>
					<body>
						<h1>Hello from my Node.js Server!</h1>
					</body>
				</html>`);
	} else if (req.url === "/api/courses") {
		const courses = [
			{ id: 1, title: "Full Stack - Level 4", semester: "Fall" },
			{ id: 2, title: "Full Stack - Level 5", semester: "Spring" },
			{ id: 3, title: "Full Stack - Level 6", semester: "Summer" },
		];
		res.setHeader("Content-Type", "application/json");
		res.write(JSON.stringify(courses, null, 2));
	} else if (req.url === "/api/userList") {
		const userList = [
			{ id: 1, name: "Adam", age: 30 },
			{ id: 2, name: "Ella", age: 25 },
			{ id: 3, name: "John", age: 40 },
		];
		res.setHeader("Content-Type", "application/json");
		res.write(JSON.stringify(userList, null, 2));
	} else if (req.url === "/api/sendEmail") {
		res.setHeader("Content-Type", "text/html");
		try {
			await mailer();
			res.write(`<html>
					<head>
						<title>My NdoeJS Server</title>
					</head>
					<body>
						<h1>Hello from my Node.js Server!</h1>
						<h2>Email sent successfully...!!!</h2>
					</body>
				</html>`);
		} catch (error) {
			console.error(error);
			res.statusCode = 500;
			res.write(`<html>
					<head>
						<title>My NdoeJS Server</title>
					</head>
					<body>
						<h1>Hello from my Node.js Server!</h1>
						<h2>Error sending email...!!!</h2>
						<p>Check console for: ${error}</p>
					</body>
				</html>`);
		}
	} else {
		res.statusCode = 404;
		res.setHeader("Content-Type", "text/plain");
		res.write("404 Not Found");
	}
	res.end();
});

module.exports = api;
