function add_multi_dimensional_array(a){
    var total = 0;
    for(var i = 0; i<a.length; i++){ 
            if(a[i] instanceof Array){
                total += add_multi_dimensional_array(a[i])
            }
            else{
                total += a[i];

            }

        }   

    return(total)

}



add_multi_dimensional_array([1,[2,[3,4]],[5,[6,10]]])

// add_multi_dimensional_array([1,[2,[3,4]]]) = 10 

// add_multi_dimensional_array([2,[3,4]]) = 9 

// add_multi_dimensional_array([3,4]) = 7 


// add_multi_dimensional_array([5,[6,10]])

// add_multi_dimensional_array([6,10])