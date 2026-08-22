## Solution:

```cpp
class Solution {
public:
    vector<int> shuffle(vector<int>& nums, int n) {
        int j=0, k=n;
        vector<int>result(2*n);
        for(int i=0; i<nums.size(); i+=2){
            result[i] = nums[j];
            result[i+1] = nums[k];
            j++; k++;
        } 
        return result;
    }
};
```

- Time Complexity: O(n)
- Space Complexity: O(n)
