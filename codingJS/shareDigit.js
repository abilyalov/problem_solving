function shareDigit(a, b){
  return a/10 == b/10 || a%10 == b%10 || a%10 == b/10 || a/10 == b%10;
}