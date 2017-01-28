//The sum of the squares of the first ten natural numbers is,

//12 + 22 + ... + 102 = 385
//The square of the sum of the first ten natural numbers is,

//(1 + 2 + ... + 10)2 = 552 = 3025
//Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

var sum_of_squares = [];
var square_of_sums = [];

var generateSumOfSquaresList = function(number){
  var saved = 0;
  var computation = 0;
  for(var i=1; i <= number; i++){
    computation = saved + i*i;
    sum_of_squares.push(computation);
    saved = computation;
  }
  return sum_of_squares[sum_of_squares.length - 1];
};

var generateSquareOfSumList = function(number){
  var saved = 0;
  var computation = 0;
  for(var i=1; i <= number; i++){
    computation = (saved + i);
    square_of_sums.push(computation*computation);
    saved = computation;
  }
  return square_of_sums[square_of_sums.length - 1];
};

var difference = function(num1,num2){
  return num2-num1;
};

console.log(difference(generateSumOfSquaresList(100),generateSquareOfSumList(100)));
//25164150
