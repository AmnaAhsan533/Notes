## Solution:

```cpp
class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
        int maxCount =0, curr=0;
        for(int num: nums){
            curr = (num == 1)? curr + 1: 0;
            maxCount = max(maxCount, curr);
        }
        return maxCount;
    }
};
```

- Time Complexity: O(n)
- Space Complexity: O(1)
