//Word Count
//Using the JavaScript language, have the function WordCount(str) take the str string parameter being passed
//and return the number of words the string contains (ie. "Never eat shredded wheat" would return 4). Words
//will be separated by single spaces. 

/* Take two, simpler answer! Break into an array and return length */

function WordCount(str){
    var arr = str.split(' ');
    return arr.length
}

WordCount("Never eat shredded wheat");

/* Take one, loop through everything
function WordCount(str){
    
    var count = 0;
    if(str!== undefined){
        count ++;
    }
    
    for(var i = 0; i<str.length; i++){
        if(str.charAt(i) === ' '){
            count++;
        }
    }

    return count;
}

WordCount("Never eat shredded wheat");
*/