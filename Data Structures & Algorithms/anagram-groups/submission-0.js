class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let output = new Map();

        for(const s of strs){
            const key = [...s].sort().join("");

            if(!output.has(key)) output.set(key, []);
            output.get(key).push(s)
        }

        return [...output.values()]
    }
}
