/*Write a method that takes in a string and returns the number of
 letters that appear more than once in the string. You may assume
 the string contains only lowercase letters. Count the number of
 letters that repeat, not the number of times they repeat in the
 string.*/

function num_repeats(str){
    
    var letters = [];
    var counter = 0;
    
    for(var i = 0; i < str.length; i++){
        for(var j = i+1; j < str.length; j++){
            if(str[i] === str[j] && letters.indexOf(str[i]) < 0){
                counter ++
                letters.push(str[i])
            }
        }
    }
    return counter;
}

//num_repeats('abdbc') //== 1
//num_repeats('aaa') //== 1
//num_repeats('abab') //== 2)
//num_repeats('cadac') //== 2
//num_repeats('abcde') //== 0