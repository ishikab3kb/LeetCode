/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length===1) return s
    else {
        let start=0
        let ans=s[0]
        for(start=0;start<s.length-1;start++){
            for(let end=start+1;end<s.length;end++){
                palindromeFound=true
                let strStart=start
                let strEnd=end
                while(strStart<strEnd){
                    if(s[strStart]!==s[strEnd]){
                        palindromeFound=false
                        break
                    }
                    strStart++
                    strEnd--
                }
                if(palindromeFound){
                    let temp=s.slice(start,end+1)
                    if(temp.length>ans.length)
                    ans=temp
                    
                }
            }
        }
        return ans
    }
};