//Objective is to find the number of subarrays whose product is less than k

let nums = [10, 5, 2, 6], k = 100


//O(n) solution that uses a sliding window approach.

let left = 0
let right = 0
let product = 1
let result = 0
    
while (right < nums.length) {
    //Multiply the product unconditionally
    product *= nums[right]
        
    //If the product went over, then move the left pointer until it isn't
    while (product >= k) {
        product = product / nums[left++]
    }
        
    //Update the result every subarray
    result += right - left + 1
        
    right++
}
    
//If the result ends up being negative, return 0 instead
return result < 0 ? 0 : result