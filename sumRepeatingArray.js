function repeating_array(arr){
    
    arr = arr.sort(function(a,b){return a-b}); //sort function doesn't sort numbers so well without a compare function
    var count = 0;
    var current = null;
    
    for(var i = 0; i<arr.length; i++){
        console.log(arr[i]);
        if(arr[i] === arr[i+1] && arr[i] !== current){
            count += 1;
            current = arr[i];
            //console.log(current);
        } 
        
        
    }
    return count;
}
repeating_array([55,55,55,55,55,65,65,65,55,55,75,75,85,55]);