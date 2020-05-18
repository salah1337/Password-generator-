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