function xyzThere(str){
  for (let i = -2; i <= str.length; i++)
    if (str.charAt(i) != '.' && str.substring(i+1, i+5) == 'xyz') {
      return true;
    }
  return false;
}