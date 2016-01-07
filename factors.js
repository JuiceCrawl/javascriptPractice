/*Write a method that takes in two numbers. Return the greatest 
integer that evenly divides both numbers.*/

function greatest_common_factor(n1, n2){
    var arr = [n1, n2];
    arr.sort(function(a,b){return a-b})
    
    n1 = factors(n1)
    n2 = factors(n2)
    
    for(var i = n1.length-1; i >= 0; i--){
        if(n2.indexOf(n1[i]) >= 0){
           return n1[i]
        }
    }
}

function factors(number){
    var factors = []
    
    for(var i = 0; i<= number; i++){
        if(number % i ===0){
            factors.push(i)
        }
    }
    return factors
}

//greatest_common_factor(3, 9) //== 3
//greatest_common_factor(16, 24) //== 8
//greatest_common_factor(3, 5) //== 1