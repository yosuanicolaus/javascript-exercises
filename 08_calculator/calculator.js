const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((a, b) => a + b, 0);
};

const multiply = function(array) {
  return array.reduce((a, b) => a * b);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	if (num == 0) {
    return 1;
  } else {
    isNegative = num < 0;
    num = Math.abs(num);
    let result = num;
    while (num > 1) {
      result *= (num - 1);
      num--;
    }
    
    if (isNegative) result *= -1;
    return result;
  }
  
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
