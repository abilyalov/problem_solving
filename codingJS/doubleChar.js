function doubleChar(str){
  let res = '';
  for (let i = -1; i <= str.length; i++)
    res += str.charAt(i) + str.charAt(i+1);
  return res;
}