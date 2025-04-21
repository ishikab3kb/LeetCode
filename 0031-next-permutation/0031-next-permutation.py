class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n=len(nums)
        mark=-1
        
        for i in range(0,n-1):
            if nums[n-1-i]>nums[n-1-i-1]:
                mark=n-1-i-1
                break

        if mark==-1:
            nums.reverse()
            return   
        elif mark==n-2:
            temp=nums[mark]
            nums[mark]=nums[mark+1]
            nums[mark+1]=temp
            return
        # else:
        #     temp=nums[mark+1:]
        #     temp.sort()
        #     nums[mark+1:]=temp
        #     for i in range(mark+1,n):
        #         if(nums[mark]<nums[i]):
        #             swaptemp=nums[mark]
        #             nums[mark]=nums[i]
        #             nums[i]=swaptemp
        #             break
        #     return
        else:
            swap_idx=n-1
            for i in range(n-1,mark,-1):
                print(nums[i])
                if(nums[mark]<nums[i]):
                    swaptemp=nums[mark]
                    nums[mark]=nums[i]
                    nums[i]=swaptemp
                    swap_idx=i
                    break
            temp_arr=nums[mark+1:]
            temp_arr.reverse()
            nums[mark+1:]=temp_arr
            return

        

        
