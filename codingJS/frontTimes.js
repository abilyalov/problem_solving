function frontTimes(str, n){
  let res = '';
  for (let i = 0; i < n; i++)
    res += str.substring(0,3);
  return res;
}
