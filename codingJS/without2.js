function without2(str){
  
  return str.length > 1 && str.substring(0,2) === str.substring(str.length-2) ?  str.substring(2) :  str;
}