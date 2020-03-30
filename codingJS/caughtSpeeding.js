function caughtSpeeding(speed, isBirthday){
  if (isBirthday)
    speed -= 5;  
  return (speed <= 60) ? 0 : (speed > 60 && speed <= 80) ? 1 : 2;
}