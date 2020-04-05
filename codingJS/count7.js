function count7(n){
  return (n == 0) ? 0 : (n % 10 == 7) ? 1 + count7(Math.floor(n/10)) : count7(Math.floor(n/10));
}