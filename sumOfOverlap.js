function sum_of_overlap(x1,x2,y1,y2){
    
   var z1 = 0;
   var z2 = 0;
   var sum = 0;
    
    if(x1>y1){
        z1 += x1;
    }else if(y1>x1){
        z1 += y1;
    }
    
    if(x2<y2){
        z2 += x2;
    }else if(y2<x2){
        z2 += y2;
    }
    
    
    
    
    for(var i = z1; i<=z2; i++){
        
        sum +=i;
        
    }
    
    return sum;
    
}

sum_of_overlap(5,20,1,10);
//return 45