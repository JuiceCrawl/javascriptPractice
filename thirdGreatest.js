/* Write a method that takes an array of numbers in. Your method should
return the third greatest number in the array. You may assume that
the array has at least three numbers in it. */


//sort arr in order using compare function & returns 3rd to last number in arr.
function third_greatest(arr){    
    arr = arr.sort(function(a, b){return a-b});
    return arr[arr.length-3];   
}

//third_greatest([5, 3, 7]) //== 3
//third_greatest([5, 3, 70, 4]) //== 4
//third_greatest([2, 3, 7, 4]) //== 3