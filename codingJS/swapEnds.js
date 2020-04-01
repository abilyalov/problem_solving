function swapEnds(nums){
  let newArr = []
  newArr[0] = nums[nums.length-1];
  nums[nums.length-1] = nums[0];
  nums[0] = newArr[0];
  return nums;
}