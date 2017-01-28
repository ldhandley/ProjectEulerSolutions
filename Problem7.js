//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//What is the 10,001st prime number?

var primes = [2,3];

//Tests to see if number is prime
var is_prime = function(num){
  for(var i = 2; i < Math.sqrt(num)+1; i++){
    if(num%i == 0){
       return false;
    }
  }
  return true;
}

var find_xth_prime = function(x){
  var counter = 4;
  while(primes.length < x){
    if(is_prime(counter)){
      primes.push(counter);
    }
    counter++;
  }
  return primes[x - 1];
}


console.log(find_xth_prime(10001));
