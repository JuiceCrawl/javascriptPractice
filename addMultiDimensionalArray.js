function flatten(arr){
    var flat_string = arr.join(); //arr into a string
    var cleanStr = flat_string.replace(/,/g," "); //removes commas
    var flat_arr = cleanStr.split(' '); //access individual numbers - put back in an arr
    var sum = 0;
    
    for(var i=0; i<flat_arr.length; i++){
        sum += parseInt(flat_arr[i]); //turns into str into integers
       
    }

return sum; 
}

flatten([1,[2, [3, 4]],[5,[6,10]]]);
//flatten([1,[2, [3, 4]],[5,6]]);


    /*    var arr = [1,[2, [3, 4]],[5,6]];
        //we can flatten it by using concat and apply
        var flat_arr = [].concat.apply([],arr);
        //and check the value
        console.log(flat_arr);
        //logs [1,2,3,4,5,6]
        
    */
    
    
//flatten(1,[2, [3, 4]],[5,6]); // [1, 1, 2, 3, 4, 5, 6]



/*var flattened = [1,[2, [3, 4]],[5,6]].reduce(function(a, b) {
  return a.concat(b);
});
console.log(flattened);
// flattened is [0, 1, 2, 3, 4, 5]

*/





