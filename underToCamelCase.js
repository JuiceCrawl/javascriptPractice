function underToCamel(underName) {
    var underNameArr = underName.split();
    var camel = [];
    
    for(var i = 0; i<underName.length; i++){
        
        if(underName[i] !== "_" && underName[i-1] === "_"){ 
           var str = underName[i].toUpperCase();
           camel.push(str)

        }else if(underName[i] !== "_"){
           camel.push(underName[i]);
        }
    }

    return camel.join("");
}
underToCamel("java____script");