/* check if three consecutive numbers equal 7. Check for first, and last cases too. */
function lucky_seven(numbers){
    //var arr =[];
    //checkThree(arr[0],arr[1],arr[2]);
    
    for (var i = 0; i < numbers.length; i++){
        if(numbers[i] + numbers[i+1] + numbers[i+2] == 7){
            return "true";
        }
        if(numbers[0]+numbers[1]+numbers[numbers.length-1] == 7){
            return "true";
        }
        if(numbers[0]+numbers[numbers.length-2]+numbers[numbers.length-1] == 7){
            return "true";
        }
        
    }
}

//takes an array with length of 3 and checks if numbers add to 7
function checkThree(arr){
    if(arr[0] + arr[1] + arr[2] == 7){
        return "true";
    }
    else{
        return "false";
    }
}

lucky_seven([1,9,9,1,5]) //true
//checkThree([1,5,1]);