//Palindrome
//Using the JavaScript language, have the function Palindrome(str) take the str parameter being passed and
//return the string true if the parameter is a palindrome, (the string is the same forward as it is backward)
//otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and
//numbers will not be part of the string. 

function palindrome(str) {

    var reversed = str.toUpperCase().split("").reverse().join("");
    var original = str.toUpperCase();
 
    
    return (reversed === original)
    
}

palindrome("racecar");


/* Another option using a loop and without arrays*/

// function reverseString(str) {
//  var result = "";
//   for(var i = 0 ; i < str.length; i++) {
//     result = str.charAt(i) + result;
//   }
//   return result;
// }

// reverseString("abc")
