function repeatEnd(str, n){
  let res = '';
  for (let i = 0; i < n; i++)
    res += str.substring(str.length - n);
  return res;
}