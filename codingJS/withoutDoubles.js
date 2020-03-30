function withoutDoubles(die1, die2, noDoubles){
  return (die1 == 6 && die2 == 6 && noDoubles) ? 7 : (die1 == die2 && noDoubles) ? die1+die2+1 : die1+die2;
}