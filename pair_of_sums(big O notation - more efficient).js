function pair_sum(arr, total){
    var left = 0
    var right = arr.length - 1
    
    while(right == left){
        
        if(arr[left] + arr[right] == total){
            return true;
            break;
        }else if (arr[left] + arr[right] > total){
            right--
        }else if (arr[left] + arr[right] < total){
            left++
        }
    }
        return false;
   
}

pair_sum([2,4, 5,7, 8, 10, 11, 13, 18, 23], 24 )
