function stringE(str){
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'e')
      count++;
  }
    return count <= 3 && count > 0;
}
  
  