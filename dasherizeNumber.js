/* Write a method that takes in a number and returns a string, placing
a single dash before and after each odd digit. There is one
exception: don't start or end the string with a dash. */

function dasherize_number(n){
    dashed = n.toString().split("").join("-").split("");
    var arr = [];
    
    for (var i = 0; i < dashed.length; i++){
        if(dashed[i] % 2 === 0 && dashed[i+2] % 2 === 0){
                arr.push(dashed[i]);
                arr.push(dashed[i+2]); 
                i = i + 2;
        }else{
            arr.push(dashed[i]);
        }
    }
    console.log(arr.join(""));
}

//dasherize_number(203) == "20-3"
//dasherize_number(303) == "3-0-3"
//dasherize_number(333) == "3-3-3"
//dasherize_number(3223) == "3-22-3"