//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

//Helper function for divisibility
var isDivisible = function(x,i){
  return (x % i == 0);
};

var oneToSomethingDivisibilityTest = function(number,x){
  for(var i = 2; i <= x; i++){
    if(!isDivisible(number,i)){
      return false;
    }
  }
  return true;
};

var firstNumberDivisibleByAll = function(x){
  var none_found = true;
  var number = 2520;
  while(none_found){
    if(oneToSomethingDivisibilityTest(number,x)){
      none_found = false;
      console.log("Found it! It's " + number);
    }else{
      number+=2520;
      console.log(number);
    }
  }
};

firstNumberDivisibleByAll(20);
//console.log(oneToSomethingDivisibilityTest(2520,10));
