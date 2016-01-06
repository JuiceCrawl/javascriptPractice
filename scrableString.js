/* Write a method that takes in a string and an array of indices in the string. Produce a new string, which contains letters from the input
string in the order specified by the indices of the array of indices. */

function scramble_string(string, array){
    reordered = [];
    
    for(var i = 0; i < array.length; i++){
        var index = array[i];
        reordered.push(string[index])
    }
    return reordered.join("")
}


//scramble_string("abcd", [3, 1, 2, 0]) //== "dbca"
//scramble_string("markov", [5, 3, 1, 4, 2, 0]) //== "vkaorm")