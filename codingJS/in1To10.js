function in1To10(n, outsideMode){
  return outsideMode && n >= 10 || outsideMode && n <= 1 || !outsideMode && n <= 10 && n >= 1;
}