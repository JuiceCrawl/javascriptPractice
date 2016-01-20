
//Letter Count I
//Using the JavaScript language, have the function LetterCountI(str) take the str parameter being passed and
//return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day
//ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's.
//If there are no words with repeating letters return -1. Words will be separated by spaces. 

function LetterCountI(str){
    
    var strSplit = str.split(' ');
    var startCount = 0;
    var countStart = 0;
    var answer = null;
    
    for(var i = 0; i < strSplit.length; i++){
        
        checkRepeat(strSplit[i])
        
    }

    
    function checkRepeat(word){
        var count = 0;
        for(var i = 0; i < word.length; i++){
            
            for(var j = i+1; j < word.length; j++){
                if(word[i] === word[j]){
                    count++
                }
            }
            
        }
        
        if(count > countStart){
            answer = word
            countStart = count
        }

        
    }
    if(answer !== null){
        return answer
    }else{
        return -1
    }


}


LetterCountI("Today, is the greatest day ever!")
