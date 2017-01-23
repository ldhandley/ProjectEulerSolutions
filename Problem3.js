var prime_factors = [];

//Finds all factors of a number but only pushes on the prime ones
var find_prime_factors = function(num){
  for(var i = 2; i < Math.sqrt(num); i++){
    if(num%i == 0){
      if(is_prime(i)){
        prime_factors.push(i);
      }
    }
  }
}

//Tests to see if number is prime
var is_prime = function(num){
  var bool = true;
  for(var i = 2; i < Math.sqrt(num); i++){
    if(num%i == 0){
       bool = false;
    }
  }
  return bool;
}

find_prime_factors(600851475143);

var find_largest = function(array){
  var largest = 0;
  for(var i = 0; i < array.length; i++){
    if(array[i] > largest){
       largest = array[i];
    }
  }
  return largest;
}

var largest = find_largest(prime_factors);
