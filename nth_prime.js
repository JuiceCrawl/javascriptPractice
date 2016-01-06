/* Write a method that returns the `n`th prime number. */

/**Start with 2, the first prime number. Run each number, 2 and above, in the is_prime 
 * function. If the function returns true, we add to the counter. When the counter 
 * reaches the input number, we return the last number that was prime. Take note that
 we need to account for the last i iteration inside the loop*/

function nth_prime(number){
    var i = 2
    var count = 0
    
    while(count < number){
        if(is_prime(i)){
            count++
        }
        i++
    }
    i--  //becasue the last iteration adds 1 to i we need to reduce this.
    return i
}


function is_prime(number){
    
    for(var i = 2; i < number; i++){
        if(number % i === 0){
            return false
        }
    }
    return true
}


//nth_prime(1) //== 2
//nth_prime(2) //== 3
//nth_prime(3) //== 5
//nth_prime(4) //== 7
//nth_prime(5) //== 11