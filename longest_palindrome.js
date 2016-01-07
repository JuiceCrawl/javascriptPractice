/* Write a method that takes in a string of lowercase letters (no uppercase letters, no repeats). Consider the *substrings* of the 
string: consecutive sequences of letters contained inside the string.
Find the longest such string of letters that is a palindrome. */

/**  */

function longest_palindrome(string){
   
   var longest = "";
   
   for(var i = 0; i < string.length; i++){
       for(var j = i+2; j < string.length+1; j++){
           var partial = string.slice(i,j)
           if(is_palindrome(partial) && longest.length < partial.length){
               longest = partial
               
           }
       }
   }
   return longest
}



function is_palindrome(str){
    reversed = str.split("").reverse().join("");
    
    if(reversed === str){
        return true
    }
        return false
}


is_palindrome('abcdefgfedcba');

//longest_palindrome('abcbd') //== 'bcb'
//longest_palindrome('abba') //== 'abba'
//longest_palindrome('abcbdeffe') //== 'effe'