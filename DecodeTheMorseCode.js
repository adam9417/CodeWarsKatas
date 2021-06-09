decodeMorse = function(morseCode){
  let words = morseCode.split('   ');
  let string = '';

  for (var i in words) {
    if (words[i] !== '') {
      let word = words[i].split(' ');
      for (var j in word) {
        if (word[j] !== '') {
          string += MORSE_CODE[word[j]];
        }
      }
      if (i < words.length -1) {
        string += ' ';
      }
    }
  }
  return string;
}