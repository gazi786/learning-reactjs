const myModules = require('./myModules');
console.log(`
	${myModules.addNums(1, 2)} \n
	${myModules.subtractNums(1, 2)}\n
	${myModules.isNumber(1)}`
);

console.log(myModules.removeVowels('Hello World'));
