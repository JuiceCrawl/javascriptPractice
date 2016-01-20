//Second GreatLow
//Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers stored in arr
//and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if
//arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at
//least 2 numbers. It can get tricky if there's just two numbers! 

function SecondGreatLow(arr){
    var sortArr = arr.sort(function(a,b){return a-b})
    var secondLowest;
    var secondGreatest;
    
        for(var i = 0; i< arr.length; i++){
            if(arr[i+1] > arr[i]){
                secondLowest = arr[i+1]
                break;
            }else{
                secondLowest = arr[0]
            }
        }
        
        for(var j = arr.length; j > 0; j--){
            if(arr[j-1] < arr[j]){
                secondGreatest = arr[j-1]
                break;
            }else{
                secondGreatest = arr[arr.length-1]
            }
        }
        
        
    
    
    return secondLowest + " " + secondGreatest;
    
    
}

SecondGreatLow([7, 7, 12, 98, 106])