class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        if(numRows==1):
            return [[1]]
        elif(numRows==2):
            return [[1],[1,1]]
        else:
            ans=[[1],[1,1]]
            for row in range(2,numRows):
                temp=[1]
                n=len(ans[row-1])
                for idx in range(0,n-1):
                    ele=ans[row-1][idx]+ans[row-1][idx+1]
                    temp.append(ele)
                temp.append(1)
                ans.append(temp)
            return ans   
        
