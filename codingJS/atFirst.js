function atFirst(str){
  return (str.length < 1) ? "@@" : (str.length >=2) ? str.substring(0,2) : str + "@"; ;
}