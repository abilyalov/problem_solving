function stringX(str){
  let result = "";
  for (let i=0; i <= str.length-1; i++) {
    if (!(i > 0 && i < (str.length-1) && str.substring(i, i+1) === ("x"))) {
      result = result + str.substring(i, i+1); 
    }
  }
  return result;
}