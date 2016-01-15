/*You will be given an array with 5 numbers. The first 2 numbers represent a range, and the next two numbers represent another range. The final number in the array is X. The goal of your program is to determine if both ranges overlap by at least X numbers. For example, in the array [4, 10, 2, 6, 3] the ranges 4 to 10 and 2 to 6 overlap by at least 3 numbers (4, 5, 6), so your program should return true.
*/

function overlappingRanges(arr){
    var first, last;
    var X = arr[4]
    
    //compare both ranges and determine a smallest and largest number 
    if(arr[0]>arr[2]){
        first = arr[0];
    }else{
        first = arr[2]
    }
    
    if(arr[1]<arr[3]){
        last = arr[1];
    }else{
        last = arr[3]
    }
    
    //add X to the new first number but subtract one to account for the number itself
    if(first + X-1 <= last){
        return true;
    }
    
    return false;
}

overlappingRanges([4, 10, 2, 6, 3]);