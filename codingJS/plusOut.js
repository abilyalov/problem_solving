function plusOut(str, word){
  let res = '';
    for (let i = 0; i < str.length; i++) {
    if (i <= str.length - word.length) {
      if (str.substring(i,i + word.length) == word) {
        res += word;
        i += word.length-1;
      } else
        res += "+";
    } else
      res += "+";
  }
  return res;
}