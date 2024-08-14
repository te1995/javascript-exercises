const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(args) {
  if(args.length === 0) {
    return 0;
  }
  return args.reduce((acc, curr) => acc + parseInt(curr));
};

const multiply = function(args) {
  if(args.length === null) {
    return 0;
  }

  return args.reduce(((a, b) => a = a * b));

};

const power = function(num, exp) {
  return num**exp;
};

const factorial = function(num) {
	let sum = 1; 
  while(true) {
    if(num === 0) {
      return sum;
    }
    sum=sum*num;
    num--;
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
