class Solution:
    def isPalindromic(self, s: str) -> bool:
        res=""
        for i in s:
            asc= ord(i)
            bi= bin(asc)[2:]
            digi= 8-len(bi)
            bi= "0"*digi+bi
            res= res+bi
        if res==res[::-1]:
            return True
        else:
            return False