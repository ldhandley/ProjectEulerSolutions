//http://codepen.io/lindseyhandley/pen/ygbRWv/?editors=0010
var fibonacci = [1,2];
var fib = 0;
var condition = true;
var sum = 0;

var find_fibonacci_number = function(){
  while(condition){
    fib = fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1];
    if(fib < 4000000){
      fibonacci.push(fib);
    }else{
      condition = false;
    }
  }
};

find_fibonacci_number();

for(var i = 0; i < fibonacci.length; i++){
  if(fibonacci[i]%2 ==0){
    sum += fibonacci[i];
  }
}
