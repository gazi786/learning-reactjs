// 

// const app = require('./modules/expressjs');

const port = process.env.PORT || 4000;
// const app = require('./catDog/catdog');

// const app = require('./modules/statusCodes');
const app = require('./studentData/student');

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
