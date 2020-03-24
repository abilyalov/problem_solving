function loneTeen(a, b){
  let ba = (a >= 13 && a <= 19);
  let bb = (b >= 13 && b <= 19);
  return ba && !bb || !ba && bb;
}