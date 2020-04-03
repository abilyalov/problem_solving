function mixString(a, b){
  let res = '';
  let max = Math.max(a.length, b.length);
  for (let i = 0; i <= max; i++)
    res+= a.charAt(i) + b.charAt(i);
  return res;
}