class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {string}
     */
    removeDuplicates(s, k) {
        const stack =[];
        for(const char of s){
            let last = stack[stack.length - 1];

            if(last && last[0] === char){
                last[1]++;
                if(last[1] === k){
                    stack.pop()
                }
            } else{
                stack.push([char, 1]);
            }
        }

        let result="";
        for(const [char, count] of stack){
            result+=char.repeat(count)
        }
        return result;
    }
}
