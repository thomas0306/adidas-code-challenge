const randomWords = require('random-words');

const generateCamelCaseWord = (n) => {
    return randomWords({ exactly: n, formatter: (word)=>`${word[0].toUpperCase()}${word.substr(1)}` }).join('');
}

const generateUniqueCamelCaseWord = (n, existing) => {
    let proposedWord = '';
    do {
        proposedWord = generateCamelCaseWord(n);
    } while(existing.find(word => word === proposedWord) !== undefined);
    return proposedWord;
}

module.exports = {
    generateCamelCaseWord,
    generateUniqueCamelCaseWord,
}