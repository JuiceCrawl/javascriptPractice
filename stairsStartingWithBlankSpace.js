function stairs(N){
    
    var stair = "";
    var blank = N;
    
    for (var row=0; row<N; row++){
    
        //make blanks
        for(var i=1; i<blank; i++){
            
            stair += " "
        }
        blank -= 1;
        
        //make stars
        for(var j = blank; j<N; j++){
            
           stair += "*"
        }
        
        stair += "\n"
    
    }
    
    return stair;
}

stairs(6);