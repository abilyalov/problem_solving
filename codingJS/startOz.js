function startOz(str){
  if (str.substring(0, 2) === 'oz')
    return 'oz';
  else if (str.charAt(0) === 'o')
    return 'o';
  else if (str.charAt(1) === 'z')
    return 'z';
  else return "";
}