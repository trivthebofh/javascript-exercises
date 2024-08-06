const fibonacci = function(number) {
    const inputNumber = parseInt(number);
    let a = 0, b = 1;
    if (inputNumber < 0) {
        return "OOPS"
    }
    if (inputNumber === 0) {
        return a;
    }
    for (let i = 2; i <= inputNumber; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
