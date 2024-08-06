const palindromes = function (str) {
    const processedString = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    return processedString.split("").reverse().join("") == processedString;
};

// Do not edit below this line
module.exports = palindromes;
