//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two 3-digit numbers.
var largest_palindrome = 0;

var getDigits = function(num){
  var digits = [];
  while(num >= 10){
    digits.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  digits.unshift(num);
  return digits;
}

var isPalindrome = function(number){
  var array = getDigits(number);
  var bool = true;

  for(var i = 0; i < array.length/2; i++){
    if(array[i] != array[array.length - 1 - i]){
       bool = false;
    }
  }
  return bool;
}

var multiples = [];
var find_largest_palindrome = function(){
  for(var i = 999; i > 99; i--){
    for(var j = 999; j > i; j--){
      var num = i * j;
      if(isPalindrome(num) && num > largest_palindrome){
        largest_palindrome = num;
      }
    }
  }
}

find_largest_palindrome();

console.log(largest_palindrome);

//You can print multiples to see what the two numbers are.

//You can print multiples to see what the two numbers are.
//Or, largest_palindrome to see what the largest palindrome is.
