function inOrderEqual(a, b, c, equalOk){
  return (a < b && b < c || equalOk && a <= b && b <= c);
}