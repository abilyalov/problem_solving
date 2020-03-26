function stringMatch(a, b){
  let leng = Math.max(a.length, b.length);
  let count = 0;
  for (let i = 0; i < leng-1; i++) {
    if (a.substring(i, i+2) === b.substring(i, i+2)) 
      count ++;
  }
  return count;
}