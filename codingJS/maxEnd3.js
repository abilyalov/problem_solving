function maxEnd3(nums){
  let res = [];
  let max = Math.max(nums[0], nums[nums.length-1]);
  for (let i = 0; i <= nums.length-1; i++)
    res.push(max);
  return res;
}