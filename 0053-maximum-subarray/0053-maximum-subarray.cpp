class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int maxSum=INT_MIN;
        int sum=0;
        int n=nums.size();
        int startPoint=0;
        int endPoint=0;
        while(endPoint<n && startPoint<=endPoint){
          
            if(nums[endPoint]>sum+nums[endPoint]){
                sum=nums[endPoint];
                startPoint=endPoint; 
            } else {
                sum=sum+nums[endPoint];
            }
            maxSum=max(maxSum,sum);
            endPoint++;
        }
        return maxSum;
    }
};