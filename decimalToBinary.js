/* You will be given a decimal number x. You have to implement a function which will convert that number into binary and check if the binary number is symmetric (also known as a palindrome) or not. Note that single digit binary numbers are not considered symmetric. */


/* This function determins if the binary form of an integer given is symetric */
function isBinSymmetry(integer) {
    var binary = decimalToBinary(integer);
    var reversedBinary = binary.split("").reverse().join("");
    console.log(binary)
    //console.log(reversedBinary)
    
    if(binary === reversedBinary && binary.length !== 1){
        return true
    }else{
        return false
    }

}

/* This function converts a number into it's binary by checking for the largestPowerOfTwo, 
* subtracting that number from the given number and repeating until that number is 1 or 
* no longer has a largest power of two.
* We look at the relationship between the each position of each power of two and determine 
* if we should push a "1" or "0" or "01" to an array. We then convert that array into a string and return.
 */

function decimalToBinary(x) {
    var binaryString = [];
    var binary = largestPowerOfTwo(x);
    var position = findPostion(binary);
    var positionAbove = position + 1;
    var lastBinary;
    
    while (binary >= 1){
    //for case of 1
        if(position === 1 && position === positionAbove - 1){
            binaryString.push("1")
            break;
        }else{
            //tests against position of previous factor of two
            if(position === positionAbove - 1){
                binaryString.push("1")
            }else{
                var findDiff = findPostion(lastBinary, binary)
                if(findDiff > 2){
                    for(var i = 0; i < (findDiff - 3); i++){
                        binaryString.push("0")
                    }
                    binaryString.push("01")
                }else{
                    binaryString.push("01")
                }
                
            }
        }   
        
        positionAbove = position
            lastBinary = x // for case where we end before the last position and need to add zeros
            x = x - binary
            binary = largestPowerOfTwo(x)
            position = findPostion(binary)
    }
    //in the case where the number given is a power of two larger than "1" or "2" then we will have to add zeros to the end. An example is "8"
    if(position === 0){
        var addZeros = findPostion(lastBinary)-1 //subtract 2 because we have 1 less zeros than its binary position
        for(var i = 0; i < addZeros; i++){
            binaryString.push("0")
        }
    }
    return binaryString.join('')
}

/* This function returns the position of a power of two by using a count variable and the divide by two function */
function findPostion(binary, one){
    var count = 0;

// using one helps us check if there are gaps between positions in the decimalToBinary function
    if(one > 1){
        one = one
    }else{
        one = 1
    }
    
    while(binary >= one){
        binary = divideByTwo(binary);
        count ++;
    }
    return count
}

/* This function returns the highest power of two, less than number provided */
function largestPowerOfTwo(n){
    for(var i = n; i >= 1; i--){
        if(is_power_of_two(i) !== null){
            return i;
        }
    }
}

/* This function checks if a number is a power of two or not. It returns the number if true otherwise returns null */
function is_power_of_two(n){
  var original = n;  

//powers of two are positively divided by 2    
    while(n > 1){
        n = divideByTwo(n); 
    }
//if n === 1 then the original number was a power of two. If we get less than 1 then the original number was not evenly divided by 2  
    if(n === 1){
        return original  
    }else{
        return null
    }
}

/* This function divides a number by 2 */
function divideByTwo(n){
    n = n/2;
    return n;
}

isBinSymmetry(13);
