function cigarParty(cigars, isWeekend){
  return (isWeekend && cigars >= 40) ? true : (!isWeekend && cigars >= 40 && cigars <= 60);   
}