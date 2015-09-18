

var getFactorial = function(number) {
  var temp;
  if(number < 1){
    return 1;
  }
  temp = number * getFactorial(number - 1);
  return temp;
};

var bottlesOfBeer = function(number) {
  var temp = ("\n" + number + " bottles of beer on the wall, " +
  number + " bottles of beeer.... take one down, " +
  "pass it around,\n" + (number - 1) +
  " bottles of beer on the wall!");
  temp = temp
  if(number < 1){
    return 1;
  }
  temp = (temp + bottlesOfBeer(number - 1));
  return temp;
};

/*
var bottlesOfBeer = function(number) {
  var myString = (number + "bottles of beer on the wall")
  console.log(number + " bottles of beer on the wall...");
  if (number > 0) {
    bottlesOfBeer(number - 1);
  }
  return myString;
};
*/


$(document).ready(function() {
  $("form#get-fact").submit(function(event) {
    var number = parseInt($("input#number").val());
    var factorial = getFactorial(number);
    var bottles = bottlesOfBeer(number);
    $(".bottles").text(bottles);
    $(".number").text(number);
    $(".factorial").text(factorial);
    $('#theFactorial').show();
    event.preventDefault();
  });
});
