//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES



//FUNCTIONS


// DOCUMENT READY FUNCTION
$(document).ready(function(){
   $("#shoot").click(function(){
         //var roll = $("#chosen").val();
         //$("#result").append(roll);
        var rps = ["rock", "paper", "scissors"];
        var comAnswer = Math.floor(Math.random()*rps.length);
        
         
         var player1 = $("#chosen").val();
         var player2 = (rps[comAnswer])
    
    var winnerText = "not sure yet";
    
    
    if((player1 === "rock" && player2 === "rock") || 
    (player1 === "paper" && player2 === "paper") ||  
    (player1 === "scissors" && player2 === "scissors")){
        winnerText = "It's a tie!";
    } else if ((player1 === "paper" && player2 === "rock") || 
    (player1 === "scissors" && player2 === "paper") || 
    (player1 === "rock" && player2 === "scissors")){
        winnerText = "You win!";
    } else if ((player1 === "scissors" && player2 === "rock") || 
    (player1 === "rock" && player2 === "paper") || 
    (player1 === "paper" && player2 === "scissors")){
        winnerText = "Computer wins!";
    } 
    console.log(player2);
    
    $("#theOne").text(winnerText);

        });
  
   
});
