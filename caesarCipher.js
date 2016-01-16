function caesar_cipher(num, str){
    var stringResult = '';

    for(var i = 0; i < str.length; i++){
      var letter = str.charAt(i);
      stringResult+= encryptChar(num, letter)
    }

    return stringResult;

}

function encryptChar(num, letter){
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'

    if(letter == ' '){
        return " ";
    }else{ 
       var newIndex = (alphabet.indexOf(letter) + num) % 26
       return alphabet.charAt(newIndex);
    }
    
}


//caesar_cipher(3, 'abc') //== 'def'
caesar_cipher(300, 'abc xyz') //== 'def abc'