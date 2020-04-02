function catDog(str){
  let catcount = 0;
  let dogcount = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str.substring(i,i+3) == 'cat') {
       catcount++;
    }
    if (str.substring(i,i+3) == 'dog') {
       dogcount++;
    }
  }
  return catcount == dogcount;
      
      
}