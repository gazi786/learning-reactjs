const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let data = {
	1: {
		id: 1,
		name: "Andrew",
		age: 37
	},
	2: {
		id: 2,
		name: "Alshafaraz",
		age: 900
	},
};

app.get("/studentData", (req, res) => {
	if (data.length === 0) {
		res.status(404).json({ error: "No data found" });
	}
	else {
		res.status(200).json(data);
	}
});

app.get("/studentData/:id", (req, res) => {
	const id = req.params.id;
	const student = data[id];
	if (!student) {
		res.status(404).json({ error: "No data found for id " + id });
	} else {
		res.status(200).json(student);
	}
});


module.exports = app;