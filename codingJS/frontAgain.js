function frontAgain(str){
  if str.length > 1
    return str.substring(0,2) === str.substring(str.length-2, str.length)
  return false;
}