function loneSum(a, b, c){
  if (a == b) {
    if (a == c)
    return 0;
  return c;
  }
  if (c == a)
    return b;
  if (c == b)
    return a;
  return a + b + c;