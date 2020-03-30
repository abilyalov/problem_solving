function redTicket(a, b, c){
  return (a+b+c == 6) ? 10 : (a == b && b == c) ? 5 :(a != b && a != c) ? 1 : 0; 
}