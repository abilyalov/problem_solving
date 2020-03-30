function maxMod5(a, b){
  return (a == b) ? 0 : (a%5 == b%5) ? Math.min(a, b) : Math.max(a, b);
}