
var bottlesOfBeer = function(number) {
  var temp = ("\n" + number + " bottles of beer on the wall, " +
  number + " bottles of beeer.... take one down, " +
  "pass it around,\n" + (number - 1) +
  " bottles of beer on the wall!");
  temp = temp
  if(number < 1){
    return 1;
  }
  /*
  temp = (temp + bottlesOfBeer(number - 1));
  */
  return temp;
};


$(document).ready(function() {
  $("form#get-fact").submit(function(event) {
    var number = parseInt($("input#number").val());
  //  var factorial = getFactorial(number);
    var bottles = bottlesOfBeer(number);
  /*  for(var i = 0; i < number; i++){
      bottles = bottlesOfBeer(i);
      $(".bottles").text(bottles);
    }*/

    event.preventDefault();
  });
});
