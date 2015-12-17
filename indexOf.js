function indexOf(str, queryStr) {

str = str.toUpperCase();
queryStr = queryStr.toUpperCase();


for(var i=0; i<str.length; i++){
    
    for(var j=0; j<queryStr.length; j++){
        
        if(str[i+j] !== queryStr[j]){
            break;
        }
            
        if(j === queryStr.length -1){
            return i;
        }
    
    }
    
   
}
return -1;

}


indexOf("helloWorld", "World") //5