function answerCell(isMorning, isMom, isAsleep){
  return (isAsleep) ? false : (!isMorning) ? true : (isMorning && isMom);
}