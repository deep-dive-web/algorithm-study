function twoSum(nums: number[], target: number): number[] {
    const answer = [];
    const numMap = new Map();
    for(let i=0; i<nums.length; i++){
        const num = nums[i];
        if(numMap.has(num)) {
            return [i, numMap.get(num)]
        }
        numMap.set(target-num, i)
    }
};