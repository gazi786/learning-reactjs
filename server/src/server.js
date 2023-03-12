const http = require('http');
const main = require('./modules/mailer');

const server = http.createServer(async (req, res) => {
	if (req.url === '/' || req.url === '/home' || req.url === '/index') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<head><title>My First Page</title></head>');
		res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
		res.write('</html>');
		res.end();
	}
	else if (req.url === '/api/courses') {
		const courses = [
			{ id: 1, title: 'Full Stack - Level 4', semester: 'Fall' },
			{ id: 2, title: 'Full Stack - Level 5', semester: 'Spring' },
			{ id: 3, title: 'Full Stack - Level 6', semester: 'Summer' },
		];
		res.setHeader('Content-Type', 'application/json');
		res.write(JSON.stringify(courses, null, 2));
		res.end();
	}
	else if (req.url === '/api/userList') {
		const userList = [
			{ id: 1, name: 'Adam', age: 30 },
			{ id: 2, name: 'Ella', age: 25 },
			{ id: 3, name: 'John', age: 40 },
		];
		res.setHeader('Content-Type', 'application/json');
		res.write(JSON.stringify(userList, null, 2));
		res.end();
	}
	else if (req.url === '/api/sendEmail') {

		res.setHeader('Content-Type', 'text/plain');
		try {
			await main();
			res.write('Email sent successfully');
		} catch (error) {
			console.error(error);
			res.statusCode = 500;
			res.write('Error sending email');
		}
		res.end();
	}
	else {
		res.statusCode = 404;
		res.setHeader('Content-Type', 'text/plain');
		res.write('404 Not Found');
		res.end();
	}
});

server.listen(4000, 'localhost', () => {
	console.log('listening for requests on port 4000');
	// main().catch(console.error);
});