function sumDigits1(n){
  return (n < 10) ? n : (n % 10) + sumDigits1(Math.floor(n/10));
}