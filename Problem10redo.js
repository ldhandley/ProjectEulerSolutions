//The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//Find the sum of all the primes below two million.

var checkIfPrime = function(num){
  for(var i=2; i <= (num/2); i++){
    if(num % i === 0){
      //console.log(num + " is not prime.")
      return false;
    }
  }
  return true;
  //console.log(num + " is prime.")
};

/* Recursive method leads to a max call stack size exceeded error :(
var sumPrimesUpTo = function(num){
  //console.log("The sum is " +sum+ " before evaluating the number " +num);

  if(num === 1){
    return 0;
  }
  if(checkIfNotPrime(num)){
    return sumPrimesUpTo(num-1);
  }
  else{
    return num + sumPrimesUpTo(num-1);
  }
};
*/

var sumPrimesUpTo = function(num){
  //2 and 3 are both prime numbers
  var sum = 5;

  for(var i=5; i < num; i+=2){
    if(i%3 === 0){

    }
    if(checkIfPrime(i)){
      sum = sum + i;
    }
    //console.log("At " +i+ " the sum is " +sum);
  }
  return sum;
}

//console.log(sumPrimesUpTo(10));
console.log(sumPrimesUpTo(2000000));
