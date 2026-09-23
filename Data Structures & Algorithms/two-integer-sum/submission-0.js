class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let results =[];

        for(let i = 0; i < nums.length; i++){
            for(let j = nums.length -1; j >= i; j--){
                if(i != j && (nums[i] + nums[j] === target)){
                    return [...results, i, j]
                }
            }
        }
    }
}
