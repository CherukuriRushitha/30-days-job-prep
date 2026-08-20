from typing import List


class Solution:
    def resultArray(self, nums: List[int]) -> List[int]:
        n= len(nums)
        r1=[nums[0]]
        r2= [nums[1]]
        for i in range(2,n):
            if r1[-1]>r2[-1]:
                r1.append(nums[i])
            else:
                r2.append(nums[i])
        return r1+r2