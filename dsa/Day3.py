class Solution:
    def sumGame(self, num: str) -> bool:
        n= len(num)
        mid= n//2
        ls=0
        rs=0
        lq=0
        rq=0
        for i in range(mid):
            if num[i]=='?':
                lq=lq+1
            else:
                ls= ls+ int(num[i])
        for i in range(mid,n):
            if num[i]=='?':
                rq=rq+1
            else:
                rs= rs+int(num[i])
        diff= ls-rs
        dq= rq-lq
        res= (diff==(dq*9)//2 and (dq*9)%2==0)
        return not res