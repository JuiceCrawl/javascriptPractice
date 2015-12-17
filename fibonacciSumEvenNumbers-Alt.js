function fibonacci(){
    var sum = 0;
    
    var a = 1 
    var b = 1 
    var c  = 0 
    
while(c < 4000000){
    
    
   sum += c 
   a = c + b 
   b = a +c
   c = a + b
   console.log(a)
   console.log(b)
   console.log(c)
}        
return sum       
}

fibonacci();

//sum of even nubers in fibanacci series using while loop
//every third number is even
//sum every third number