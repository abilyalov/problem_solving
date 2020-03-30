function squirrelPlay(temp, isSummer){
  return (temp <= 100 && temp >= 60 && isSummer) ? true : (temp <= 90 && temp >= 60 && !isSummer);
}