function greenTicket(a, b, c){
  return (a == b && b == c) ? 20 : (a != b && b != c && c != a) ? 0 : 10;
}