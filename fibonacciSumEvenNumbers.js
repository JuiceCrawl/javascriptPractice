function fibonacci(start){
    var first = start;
    var last = 1;
    var sum = 0;
    
    for(var i = 1; i<4000000; i+=last){
        
        last = i + last;
        first = i;
        console.log(first);
        console.log(last);
        
        if(first % 2 === 0 && first < 4000000){
            sum += first;
        }
        
        if(last % 2 === 0 && last < 4000000){
            sum += last;
        }
        
    }
  
  return sum;
}

fibonacci(1)

//sum of even nubers in fibanacci series