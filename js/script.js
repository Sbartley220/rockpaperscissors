// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
var userChoice = $("#input").val();

$("#shoot").click(function(){
    $("#userChoice").text(userChoice);
    var randomNumber= Math.random();
    var computerChoice; 
    if (randomNumber< .333){
        computerChoice= "rock"
    }
    console.log(computerChoice);
});


