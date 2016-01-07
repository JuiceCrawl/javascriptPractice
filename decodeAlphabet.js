/*Write a method that takes in an integer `offset` and a string.
 Produce a new string, where each letter is shifted by `offset`. You
 may assume that the string contains only lowercase letters and
 spaces.
 When shifting "z" by three letters, wrap around to the front of the
 alphabet to produce the letter "c".*/

function caesar_cipher(num, str){
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var decoded =[];
    
    for(var i = 0; i < str.length; i++){
        var index = alphabet.indexOf(str[i])
        console.log("index" + index)
        if(index === -1){
            decoded.push(" ") // -1 here means this was a space in the string
            continue; // instead of else statment. (without it will run the last else statment)
        }
        if(index + num > 25){ //25 letters in alphabet w/ 0 index
            var newIndex = ((index + num) % 26) // resets alphabet, 26%26 = 0 index
            decoded.push(alphabet[newIndex])
            console.log(newIndex)
        }else{
            decoded.push(alphabet[index + num])
        }
    }
    return decoded.join('')
}

//caesar_cipher(3, 'abc') //== 'def'
caesar_cipher(3, 'abc xyz') //== 'def abc'