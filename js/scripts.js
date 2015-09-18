
var bottlesOfBeerForScripts = function(number) {
    var temp = ("\n" + number + " bottles of beer on the wall, " +
    number + " bottles of beeer.... take one down, " +
    "pass it around,\n" + (number - 1) +
    " bottles of beer on the wall!");
    if(number < 1){
      return ("No more bottles of beer on the wall," +
       " no more bottles of beer." +
       " Go to the store and buy some more,"  +
     "  99 bottles of beer on the wall.");
    }
    temp = (temp + bottlesOfBeerForScripts(number - 1));
    return temp;
  };


$(document).ready(function() {
  $("form#get-fact").submit(function(event) {
    var number = parseInt($("input#number").val());
    event.preventDefault();
  });
});
