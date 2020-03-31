function makeLast(nums){
  let double = [];
  for (let i = 0; i <= (nums.length-1)*2; i++)
    double.push(0);
  double.push(nums[nums.length-1]);
  return double;
}