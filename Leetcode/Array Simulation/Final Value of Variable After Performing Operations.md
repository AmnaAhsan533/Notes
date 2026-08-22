## Solution:
```cp
class Solution {
public:
    int finalValueAfterOperations(vector<string>& operations) {
        int val = 0;
        for (const string& op : operations){
            if(op[1] == '+'){
                val += 1;
            }
            else val -= 1;
        }
        return val;
    }
};
```
- Time Complexity: O(n)
- Space Complexity: O(1)
