//A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

//a2 + b2 = c2
//For example, 32 + 42 = 9 + 16 = 25 = 52.

//There exists exactly one Pythagorean triplet for which a + b + c = 1000.
//Find the product abc.

var answer = [];
var sum = 1000;

var checkSolution = function (a,b,c){
  if(a + b + c === sum && a < b && b < c && (Math.pow(a,2)+ Math.pow(b,2) === Math.pow(c,2))){
    console.log("FOUND " + a + " " + b + " " + c);
    answer.push(a);
    answer.push(b);
    answer.push(c);
    console.log("Product of a, b, and c is " + a*b*c);
  }
};

var c = sum - 3;
var a = 1;
var b = sum - c - a;
//Keep going until you find an answer
while((answer.length === 0) && (c > 0)){
  //Iterate through a's and b's until you reach a = b or b < a
  while(a < b){
    checkSolution(a,b,c);
    console.log(a + " " + b + " " + c);
    b--;
    a++;
  }
  a = 1;
  c--;
  var b = sum - c - a;

}
