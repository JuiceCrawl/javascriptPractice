//Arith Geo
//Using the JavaScript language, have the function ArithGeo(arr) take the array of numbers stored in arr and
//return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it
//follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence
//is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each
//term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and
//Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and
//no array will contain all the same elements. 

function ArithGeo(arr) {
   var arithmetic = arr[1]-arr[0];
   var geometric = arr[1]/arr[0];

   if(checkArth(arithmetic, arr)){
       return "Arithmetic";
   } else if(checkGeo(geometric, arr)){
       return "Geometric";
   }else{
       return -1 
   }

    
   
    function checkArth(arithmetic, arr){
        for(var i = 0; i < arr.length-1; i++){
            if( (arr[i]+ arithmetic) !== arr[i+1]){
                return false
            }
        }
        
            return true;
    }
    
    function checkGeo(arithmetic, arr){
        for(var i = 0; i < arr.length-1; i++){
            if( (arr[i] * arithmetic) !== arr[i+1]){
                return false
            }
        }
        
            return true;
    }
    
    
}


//ArithGeo([2, 4, 6, 8]);  //art
//ArithGeo([2, 6, 18, 54]); //geo