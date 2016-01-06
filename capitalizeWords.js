/* Write a method that takes in a string of lowercase letters and
spaces, producing a new string that capitalizes the first letter of
each word. */

function capitalize_words(phrase){
    
    capitalizedArray = [];
    
    for(var i = 0; i < phrase.length; i++){
        if(i===0){
            capitalizedArray.push(phrase[i].toUpperCase())
        }else if(phrase[i]=== " "){
            capitalizedArray.push(phrase[i])
            capitalizedArray.push(phrase[i+1].toUpperCase())
            i++;
        }else{
            capitalizedArray.push(phrase[i])
        }
    }
    
    capitalizedArray = capitalizedArray.join("")
    console.log(capitalizedArray)
}


capitalize_words("this is a sentence") //== "This Is A Sentence"
capitalize_words("mike bloomfield") //== "Mike Bloomfield"