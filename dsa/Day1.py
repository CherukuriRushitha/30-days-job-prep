class Solution:
    def minPrice(self, prices: list[int], discounts: list[int]) -> float:
        n= len(prices)
        m= len(discounts)
        
        prices.sort(reverse=True)
        discounts.sort(reverse=True)
        res= 0.0
        for i in range(n):
            if i<m:
                d=discounts[i]
                p= prices[i]
                final = (p*(100-d))/100.0
                res = res+final
            else:
                res= res+prices[i]
        return res