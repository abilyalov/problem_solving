function bunnyEars2(bunnies){
  return (bunnies == 0) ? 0 : (bunnies % 2 == 0) ? 3 + bunnyEars2(bunnies - 1) : 2 + bunnyEars2(bunnies - 1);
}