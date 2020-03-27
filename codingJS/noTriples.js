function noTriples(nums){
  for (let i=0; i < (nums.length-2); i++) {
    let first = nums[i];
    if (nums[i+1]==first && nums[i+2]==first) 
      return false;
  }
  
  
  return true;
}