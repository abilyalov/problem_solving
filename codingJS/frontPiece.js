function frontPiece(nums){
  let newArr = [];
  if (nums.length == 0)
    return [];
  if (nums.length < 2) 
    return nums[0];
  newArr.push(nums[0], nums[1])
  return newArr;
}