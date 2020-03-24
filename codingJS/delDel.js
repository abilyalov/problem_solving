function delDel(str){
  return (str.substring(1, 4) === 'del') ? str.charAt(0) + str.substring(3+1) : str;
}