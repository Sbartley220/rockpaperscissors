// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
var user = $("#input").val();
$("#shoot").click(function(){
$("#userChoice").text(user);
});

$("#shoot").click(function(){
var comp = $("#input").val();
$("#computerChoice").text(comp);
});

if(scissors > paper ) {
        $("#text").text("nice try");
    } else  if(paper > rock) {
        $("#text").text("sorry");
    }
    else (rock > scissors)
});

