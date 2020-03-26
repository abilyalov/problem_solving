function stringBits(str){
  let res = '';
  for (let i = 0; i <= str.length; i+=2)
    res =res + str.substring(i, i+1)
  return res;
}


