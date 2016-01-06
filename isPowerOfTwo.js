/* Write a method that takes in a number and returns true if it is a power of 2. Otherwise, return false. */

function is_power_of_two(n){
    
    while(n > 1){
        n = divideByTwo(n); //recursion: call divideByTwo function until n becomes < 1.
        console.log(n) //check that function is working as expected
    }
    
    if(n === 1){
        return "true"
    }else{
        return "false"
    }
}

//function divides a number by 2
function divideByTwo(n){
    n = n/2;
    return n;
}

//is_power_of_two(1) //== true 
//is_power_of_two(16) //== true 
//is_power_of_two(64) //== true 
//is_power_of_two(78) //== false 
//is_power_of_two(0) //== false