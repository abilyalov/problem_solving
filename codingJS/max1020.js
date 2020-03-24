function max1020(a, b){
  if (a >= 20 && b <= 20 && b >= 10)
      return b;
  if (b >= 20 && a <= 20 && a >= 10)
      return a;
  return 0; 
}