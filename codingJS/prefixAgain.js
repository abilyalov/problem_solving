function prefixAgain(str, n){
  for (let i = 1; i < str.length; i++)
  if (str.substring(0,n) == str.substring(i,i+n)) {
    return true;
  }
  return false;
}