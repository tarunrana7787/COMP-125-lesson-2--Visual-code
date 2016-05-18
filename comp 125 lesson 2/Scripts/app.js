/* main JavaScript file */

//global scope
var Tarun = "Tarun";
//IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";
    
    
    
    //code codes in here
    console.log("App Started...");
    
  
    /*
    //named function
    function writeToFirstParagraph() {
        //for debugging only
        console.log("Executing writeToFirstParagraph");
        
          //create a reference to a p element with an id of "firstParagraph"
    var firstParagraph = document.getElementById("firstparagraph");
    
    firstParagraph.textContent = "It's alive!!!";
    
        console.log(Tarun)
    }
    */
    //declare a variable that points on an annnonymus function
    var writeToFirstParagraph = function() {
        //for debugging only
        console.log("Executing writeToFirstParagraph");
        
          //create a reference to a p element with an id of "firstParagraph"
    var firstParagraph = document.getElementById("firstparagraph");
    
    firstParagraph.textContent = "It's alive!!!";
    
        console.log(Tarun)
    }
               
    var alias = writeToFirstParagraph;
    
    
    //execute function
    writeToFirstParagraph();
    
    console.log(writeToFirstParagraph);
    
    
    
    
})();