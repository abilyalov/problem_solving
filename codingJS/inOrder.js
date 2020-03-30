function inOrder(a, b, c, bOk){
  return (a < b && b < c || bOk && a >= b && b < c)
}