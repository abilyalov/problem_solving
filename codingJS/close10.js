function close10(a, b){
  return Math.abs(10 - a) === Math.abs(10 - b) ? 0 : Math.abs(10 - a) > Math.abs(10 - b) ? b : a : 0;
} 