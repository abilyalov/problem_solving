function repeatFront(str, n){
  let res = '';
  for (n >= 0; n--)
    res += str.substring(0,n+1);
  return res;
}