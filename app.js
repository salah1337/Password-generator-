function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};
function getRandomSymbol() {
    const symbols = '!&@$#^([)]{}=:;,?.*²¨\<>/'
    return symbols[Math.floor(Math.random() * symbols.length)]
};

const resultOpt= document.getElementById('result');
const lengthOpt= document.getElementById('length');
const uppercaseOpt= document.getElementById('uppercase');
const lowercaseOpt= document.getElementById('lowercase');
const numbersOpt= document.getElementById('numbers');
const symbolsOpt= document.getElementById('symbols');
const generateOpt= document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

clipboard.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultOpt.innerText;
	
	if(!password) { return; }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});

generate.addEventListener('click', () => {
	const length = +lengthOpt.value;
	const hasLower = lowercaseOpt.checked;
	const hasUpper = uppercaseOpt.checked;
	const hasNumber = numbersOpt.checked;
	const hasSymbol = symbolsOpt.checked;
	
	resultOpt.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	// Doesn't have a selected type
	if(typesCount === 0) {
		return '';
	}
	
	// create a loop
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}