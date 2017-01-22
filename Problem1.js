//http://codepen.io/lindseyhandley/pen/rjmqqK?editors=0010

var max_number = 1000;
var multiples_of_three_and_five = [];

//Populate the list of multiples of 3
for(var i = 1; i < max_number; i++){
  if(i%3 == 0){
    multiples_of_three_and_five.push(i);
  } else if(i%5 == 0){
    multiples_of_three_and_five.push(i);
  }
}

var sum_of_multiples_of_three_and_five = 0;
for(var i = 0; i < multiples_of_three_and_five.length; i++){
  sum_of_multiples_of_three_and_five += multiples_of_three_and_five[i];
}
