# Cipher-Web3Brigde

This Cipher has two functions. The encode function takes a accepts a text and a secret. 
The decode function accepts a text and a secret. 
The secret used to encode and decode must be the same numerical value. 


Caveat. It will give unpredictable results when encoding text containing characters whose unicode decimal representation multiplied by the secret number is larger than the highest unicode decimal or falls within the range of decimals for command characters.
