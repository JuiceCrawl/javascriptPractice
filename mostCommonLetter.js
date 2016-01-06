/* Write a method that takes in a string. Your method should return the
most common letter in the array, and a count of how many times it appears. */

function most_common_letter(str){
    letter = ""
    var counterTotal = 0;
    var innerCounter = 0;
    
    //check individual letter against each letter of the string with a nested loop
    for(var i = 0; i < str.length; i++){
    
        for(var j = 0; j < str.length; j++){
            if(str[i] === str[j]){
                innerCounter++
            }
        }
        //store info on largest count and letter after inner loop finalizes
        if(innerCounter > counterTotal){
            counterTotal = innerCounter
            letter = str[i]
        }
        
        //outside of loop and after storing info, reset inner counter
        innerCounter = 0;
    }
    
    return letter + "," + counterTotal;
}


//most_common_letter("abca") //== ["a", 2]
most_common_letter("abbab"); //== ["b", 3]