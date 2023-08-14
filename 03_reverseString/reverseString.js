const reverseString = function(str) {
    let returnString = "";

    for (let i = str.length - 1; i >= 0; i--) {
        returnString += str[i];
    } 

    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
