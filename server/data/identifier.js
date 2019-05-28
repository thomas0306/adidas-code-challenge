const randomWords = require('random-words');

const generateCamelCaseWord = (n) => {
    return randomWords({ exactly: n, formatter: (word)=>`${word[0].toUpperCase()}${word.substr(1)}` }).join('');
}

module.exports = {
    generateCamelCaseWord,
}