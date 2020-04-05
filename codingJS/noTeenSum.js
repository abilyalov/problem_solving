function noTeenSum(a, b, c){
let n = 0;
function fixTeen(n) {
  return (n >= 13 && n <= 19 && n != 15 && n != 16) ? 0 : n;
}
  
return fixTeen(a) + fixTeen(b) + fixTeen(c);
}


}