function triangle(rows){
  return (rows == 0) ? 0 :  rows + triangle(rows-1);
}