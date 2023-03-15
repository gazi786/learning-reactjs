const express = require("express");

const app = express();

app.get("/api/cat", (req, res) => {
	res.send(`
   <html>
			<head>
				<title>My NodeJS Server</title>
				</head>
				<body style="width: 80%;text-align: center;">
					<h1>I am a CAT...!!!</h1>
					<p>Have a lovely day...MEOW...!!! MEOW...!!!</p>
					<div style="width: 80%;text-align: center;">
						<img/ src="https://wallpapers-clan.com/wp-content/uploads/2022/07/funny-cat-3.jpg">
					</div>
					</body>
					</html>
					`);
});

app.get("/api/dog", (req, res) => {
	res.send(`
		<html>
			<head>
				<title>My NodeJS Server</title>
				</head>
				<body style="width: 80%;text-align: center;">
					<h1>I am a DOG...!!!</h1>
					<p>Have a lovely day...WOOF...!!! WOOF...!!!</p>
					<div style="width: 70%; text-align: center;">
						<img/ src="https://i.ytimg.com/vi/_Jp6H1f7xoU/maxresdefault.jpg">
					</div>
					</body>
					</html>
					`);
});

module.exports = app;