function wordEnds(str, word){
  let res = '';
  for (let i = 0; i <= str.length; i++) {
    if (str.substring(i, i+word.length) == word)
      res += str.charAt(i-1) + str.charAt(i+word.length);
  }
  return res;
}