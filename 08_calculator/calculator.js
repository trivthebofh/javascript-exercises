const add = function(addend1, addend2) {

  return addend1 + addend2;
	
};

const subtract = function(minuend, subtrahend) {
  return minuend - subtrahend;
};

const sum = function(inArray) {

  return inArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
	
};

const multiply = function(inMultipliers) {
  return inMultipliers.reduce((multiplier, multiplicand) => multiplier * multiplicand)
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(num) {

  if (num === 0 || num === 1) return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
