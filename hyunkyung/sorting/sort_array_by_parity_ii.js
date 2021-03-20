var sortArrayByParityII = function(nums) {
    let result = new Array(nums.length);

    for(let i = 0, even = 0, odd = 1; i < nums.length; i ++) {
        if(nums[i] % 2 === 0) {
            result[even] = nums[i];
            even += 2;
        } else {
            result[odd] = nums[i];
            odd += 2;
        }
    }
    return result;
};