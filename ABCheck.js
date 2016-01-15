//AB Check
//Using the JavaScript language, have the function ABCheck(str) take the str parameter being
//passed and return the string true if the characters a and b are separated by exactly 3 places 
//anywhere in the string at least once (ie. "lane borrowed" would result in true because there
//is exactly three characters between a and b). Otherwise return the string false. 

function ABCheck(str){
    
    str = str.toLowerCase(); //incase the str might have upper and lowercases
    
    for(var i = 0; i < str.length; i++){
        
        if(str.charAt(i) === 'a'){
            var isB = str.charAt(i+4)
            if(isB === "b"){
                return true;
            }
        }
        
        
    }
    
    return false;
    
}

ABCheck("lane boaroweb");