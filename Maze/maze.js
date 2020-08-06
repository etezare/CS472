var i=0;
var outCount=0;
$(document).ready(function(){
    "use strict";
  $(".boundary").mouseover(function(event){
    $(".boundary").addClass("youlose");
    // alert("you lost! :(")
     $("#status").text("You lose!");
     outCount++;
    
});
 $("#end").mouseover(function(event){
    // alert("you win! :]");
    if(i>0 && outCount==0){
        $("#status").text("You won!");
    }

    else{
        $("#status").text("You lose!");
        outCount++;
    }

 });

 $("#start").mouseover(function(){
    $(".boundary").css('background-color','#eeeeee');
    location.reload();
    
});
$("#maze").mouseenter(function(){
    i++;
  });

$("#maze").mouseleave(function(){
    if(i>0){
        outCount++;
    }
  });

})