//remove duplicate characters from a string but return the first one

function findDuplicateChar(str) {
   var letters = [];
    var finished = "";

    for(var i = 0;  i < str.length; i++){
        x = str.charAt(i);
        if (letters.indexOf(x) > -1){
            console.log(x)
        }else{
           finished += x; 
           letters.push(x);
        }
        
    }
    return finished
}

findDuplicateChar( "abb^&()ccbb&&hha" ) //'ab^&()ch'