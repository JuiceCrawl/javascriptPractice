function oddball_sum(numbers){
    var sum = 0;
    
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 !== 0){
            sum+= numbers[i]
        }else{
            sum+= 0;
        }
    }
    
    return sum;
}

oddball_sum([1,2,3,4,5]) //== 9 # => 1 + 3 + 5 == 9
oddball_sum([0,6,4,4]) // == 0
oddball_sum([1,2,1]) // == 2