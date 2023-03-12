const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.write('Hello World');
		res.end();
	}
	if (req.url === '/api/courses') {
		res.write(JSON.stringify([1, 2, 3]));
		res.end();
	}
	if (req.url === '/api/userList') {
		const userList = [
			{ id: 1, name: 'Adam', age: 30 },
			{ id: 2, name: 'Ella', age: 25 },
			{ id: 3, name: 'John', age: 40 },

		];
		res.write(JSON.stringify(userList));
		res.end();
	}
});

server.listen(4000, 'localhost', () => {
	console.log('listening for requests on port 4000');
});