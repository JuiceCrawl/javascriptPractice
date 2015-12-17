function divisor_match(divisor_array,low,high){

    var counter = 0;

    for (var i=low; i<=high; i++){
        
        
        for(var j= 0; j<divisor_array.length; j++){
            
            if(i % divisor_array[j] === 0){
                counter += 1;
            }
            
            if(counter === divisor_array.length){
                console.log ( i + " all match");
            }
            
        }
        
        if(counter === 1){
                console.log ( i + " one match");
        }else if(counter !== 1 && counter !== divisor_array.length){
                console.log(i);
        }
        counter = 0;
    }

return counter;
    
}

//divisor_match([2,3,5], 1,30);
divisor_match([2,3], 1,7);



/*
//This is my original code that only words for a 2 dimensional divisor_array

function divisor_match(divisor_array,low,high){

    for(var i=low; i<=high; i++){
            if(i % divisor_array[0] === 0 && i % divisor_array[1] === 0){
                console.log ( i+ " all match");
            }else if(i % divisor_array[0] === 0 || i % divisor_array[1] === 0){
                console.log ( i+ " one match");
            }else{ 
                console.log(i);
            }
    }
}

divisor_match([2,3], 1,7);

*/
            

            