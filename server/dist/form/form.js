const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginResult = document.getElementById('loginResult');



const sendLogin = (e) => {
	e.preventDefault();
	const email = emailInput.value;
	const password = passwordInput.value;
	const data = { email, password };
	const options = {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		}
	};
	fetch('http://localhost:4000/login', options)
		.then(res => res.json())
		.then(data => {
			console.log(data);
			loginResult.innerText = data.message;
		})
		.catch(err => console.log(err));
}

form.addEventListener('submit', sendLogin);