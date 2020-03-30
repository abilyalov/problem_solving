function teaParty(tea, candy){
  return (tea < 5 || candy < 5) ? 0 : (Math.min(tea, candy)*2 <= Math.max(tea, candy)) ? 2 : 1;
}