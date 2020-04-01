function midThree(nums){
  let newArr = [];
  newArr.push(nums[(nums.length-1)/2-1], nums[(nums.length-1)/2], nums[(nums.length-1)/2+1]);
  return newArr;
}