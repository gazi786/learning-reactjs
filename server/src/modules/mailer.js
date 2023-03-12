"use strict";
const nodemailer = require("nodemailer");
require('dotenv').config();

// async..await is not allowed in global scope, must use a wrapper
async function main() {
	// Generate test SMTP service account from  Mission Ready.email
	// Only needed if you don't have a real mail account for testing
	let testAccount = await nodemailer.createTestAccount();

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		host: "smtp.office365.com",
		port: 587,
		secure: false, // true for 465, false for other ports
		auth: {
			user: process.env.MISSIONREADY_EMAIL, // generated Mission Ready user
			pass: process.env.MISSIONREADY_PASSWORD, // generated  Mission Ready password
		},
	});

	const mailOptions = {
		from: '"Fred Foo 👻" <alshafarazg@missionreadyhq.com>', // sender address
		to: '"alshafarazg@gmail.com"', // list of receivers
		subject: "Hello There  ✔", // Subject line
		// text: "Hello world?", // plain text body
		html: `<p><b>Testing Amazing things</b></p>
			<p>I am sending this email transport through the API on my server (Calling url in my browser => http://localhost:4000/api/sendEmail).</p>
			<p>If you receiving this then know that my multiple if/else if/else statements are working...!!!</p>
			<p>This text has been written with html body tags...</p>
			<p><img src='https://media.tenor.com/-lXKZdnfhZ4AAAAC/tenor.gif' alt='Hurray Gif'></p>`,// html body
	};

	// send mail with defined transport object
	let info = await transporter.sendMail(mailOptions);

	console.log("Message sent: %s", info.messageId);

	// Preview only available when sending through an  Mission Ready account
	console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
	// Preview URL: https:// Mission Ready.email/message/WaQKMgKddxQDoou...
}

module.exports = main;
