function greet(name) {
	return `Hello ${name}!. Welcome to Node`;
}

// console.log(greet('John'));

const addNums = (Num1, Num2) => {
	return Num1 + Num2;
};

const subtractNums = (Num1, Num2) => {
	return Num1 - Num2;
};

const isNumber = (num) => {
	return typeof num === 'number';
};

function removeVowels(str) {
	return str.replace(/[aeiou]/gi, "");
}

module.exports = { addNums, subtractNums, isNumber, removeVowels };