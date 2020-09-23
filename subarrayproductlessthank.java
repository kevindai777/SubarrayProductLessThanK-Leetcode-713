//Java Solution

class Solution {
    public int numSubarrayProductLessThanK(int[] nums, int k) {
        int left = 0;
        int right = 0;
        int product = 1;
        int ans = 0;
        
        while (right < nums.length) {
            product *= nums[right];
            
            while (left < nums.length && product >= k) {
                product /= nums[left++];
            }
            
            ans += right - left + 1;
            right++;
        }
        
        return ans > 0 ? ans : 0;
    }
}