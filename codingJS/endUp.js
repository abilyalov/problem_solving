function endUp(str){
  let high = str.substring(str.length-4+1);
  return (str.length <= 3) ? high.toUpperCase() : str.substring(0, str.length-3) + high.toUpperCase() ;
}