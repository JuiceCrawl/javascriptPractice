var userChoice = prompt("Do you choose rock, paper scissors or rope?");

var answers = ["rock", "paper", "scissors", "rope"];

while(-1 === answers.indexOf(userChoice)){
        userChoice = prompt("Please choose rock, paper, scissors or rope!");
};

var computerChoice = Math.random();
if (computerChoice < 0.25) {
	computerChoice = "rock";
} else if(computerChoice <= 0.50) {
	computerChoice = "paper";
} else if(computerChoice <= 0.75){
	computerChoice = "scissors";
} else {
	computerChoice = "rope";
} console.log("Computer: " + computerChoice);

function compare(choice1, choice2){
    if(choice1===choice2){
        return "The result is a tie! Play again. Maybe some day I'll learn how to code and ask both you and the computer for new choices"
        
    }
        else if(choice1 ==="rock"){
            if(choice2 ==="scissors"){
                return "rock wins";  
            }else if(choice2 ==="paper"){
                return "paper wins";   
            }else{
                return "rope wins";   
            };
        }
        else if(choice1 ==="paper"){
            if(choice2 ==="rock"){
                return "paper wins";  
            }else if(choice2 ==="scissors"){
                return "scissors wins";  
            }else{
                return "rope wins";   
            };
    
        }
        else if(choice1 ==="scissors"){
            if(choice2 ==="rock"){
                return "rock wins";  
            }else if(choice2 ==="paper"){
                return "scissors wins";  
            }else{
                return  "scissors wins";   
            };
    
        }
        else{
            if(choice2 === "rock"){
                return "rope wins";
            }else if(choice2 ==="scissors"){
                return "scissors wins";  
            }else{
                return "rope wins";   
            };        
            
        };        
       
                
};

compare(userChoice, computerChoice);