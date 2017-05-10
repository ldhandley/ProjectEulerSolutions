//The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

//Find the sum of all the primes below two million.


var isPrime = function(num){
  for(var i=2;i<=num/2;i++){
    if(num%i === 0){
      return false;
    }
  }
  return true;
}

var findPrimesLessThan = function(num){
  //automatically put 2 & 3 into sum_of_primes so they don't get weeded out below
  var sum_of_primes = 5;
  for(var i = 3; i < num; i+=2){
    if(i%3 === 0){

    }
    else if(isPrime(i)){
      sum_of_primes += i;
    }
  }
  console.log(sum_of_primes);
}


findPrimesLessThan(2000000);
