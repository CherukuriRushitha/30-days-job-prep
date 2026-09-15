class Solution:
    def longestSubarray(self, nums: list[int]) -> int:
        n= len(nums)
        z=0
        res=0
        l=0
        for r in range(n):
            if nums[r]==0:
                z=z+1
            while z>1:
                if nums[l]==0:
                    z=z-1
                l=l+1
            res= max(res,r-l)
        return res