function sumLimit(a, b){
  let sum = a+b;
  return (a.toString().length == sum.toString().length) ? sum : a;
}