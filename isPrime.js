/* Write a method that takes in an integer (greater than one) and returns true if it is 
prime, otherwise return false. */

/*Check for any numbers between 2 and 1 before itself for positive divisors.
If we find at least one we return false. Otherwise after looping we retrun true. */
function is_prime(number){
    
    if(number <= 1){
        return false
    }
    
    for(var i = 2; i < number; i++){
        if(number % i === 0){
            return false
        }
    }
    return true
}


//is_prime(2) //== true
//is_prime(3) //== true
//is_prime(4) //== false
//is_prime(9) //== false