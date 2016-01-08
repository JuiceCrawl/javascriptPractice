function disemvowel(string){
    var vowels = ['a','e','i','o','u']
    var arr = [];
    
    for(var i = 0 ; i < string.length; i++){
        if( vowels.indexOf(string[i]) < 0 ){
            arr.push(string[i]);
        } 
    }
   console.log(arr.join(""));
    
}
disemvowel("foobar") //== "fbr"
disemvowel("ruby") //== "rby"
disemvowel("aeiou") //== ""