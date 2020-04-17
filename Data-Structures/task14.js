function checkSet(arrToBeSet, checkValue){
   var set = new Set(arrToBeSet);
   var result = [
      set.has(checkValue),
      set.size
   ];
   return result;
}
checkSet([ 1, 2, 3], 2); // Should return [ true, 3 ]
