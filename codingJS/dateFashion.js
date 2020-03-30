function dateFashion(you, date){
   return (Math.min(you, date) <= 2) ? 0 : (you > 2 && you < 8 && date < 8 || date > 2 && date < 8 && you < 8) ? 1 : 2;
}