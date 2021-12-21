function encode(secret, plainText){
    let encodedText = '';
    let originalUnicodeDecimal;
    let newUnicodeDecimal;
    for(i = 0; i < plainText.length; i++){
        originalUnicodeDecimal = plainText.charCodeAt(i);
        newUnicodeDecimal = originalUnicodeDecimal * secret;
        encodedText += String.fromCharCode(newUnicodeDecimal)
    }
    
    return encodedText;
}

function decode(secret, encodedText){
    let decodedText = '';
    let originalUnicodeDecimal;
    for(i = 0; i < encodedText.length; i++){
        originalUnicodeDecimal = encodedText.charCodeAt(i) / secret;
        decodedText += String.fromCharCode(originalUnicodeDecimal)
    }
    
    return decodedText;
}
