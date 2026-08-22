## Solution
```cpp
class Solution {
public:
    int largestAltitude(vector<int>& gain) {
        int max = 0, curr = 0;
        for(int g : gain){
            curr += g;
            if(curr > max){
                max = curr;
            }
        }
        return max;
    }
};
```

- Time Complexity: O(n)
- Space Complexity: O(1)
