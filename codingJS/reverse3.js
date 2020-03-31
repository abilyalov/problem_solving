function reverse3(nums){
  let newArr = [];
  for (let i = nums.length-1; i >= 0; i--)
    newArr.push(nums[i]);
  return newArr;
}