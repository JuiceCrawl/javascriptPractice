function palindrome(str) {

    var reversed = str.toUpperCase().split("").reverse().join("");
    var str = str.toUpperCase();
 
    
    if(reversed === str){
        return "true";
    }else{
        return "false";
    }
    
}

palindrome("racecar");