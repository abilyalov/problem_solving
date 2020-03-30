function alarmClock(day, vacation){
  if (vacation)
    return (day == 6 || day == 0) ? "off" : '10:00';
  return (day == 6 || day == 0) ? "10:00" : "7:00";
}