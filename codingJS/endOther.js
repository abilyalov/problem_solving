function endOther(a, b){
  let aLow = a.toLowerCase();
  let bLow = b.toLowerCase();
  return (aLow.substring(0) == bLow.substring(b.length-a.length)) ? true : (bLow.substring(0) == aLow.substring(a.length - b.length));
}