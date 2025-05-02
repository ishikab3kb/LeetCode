/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length===1) return s
    else {
        
        let ans=s[0]
        for(let i=1;i<s.length;i++){
            // for(let end=start+1;end<s.length;end++){
            //     palindromeFound=true
            //     let strStart=start
            //     let strEnd=end
            //     while(strStart<strEnd){
            //         if(s[strStart]!==s[strEnd]){
            //             palindromeFound=false
            //             break
            //         }
            //         strStart++
            //         strEnd--
            //     }
            //     if(palindromeFound){
            //         let temp=s.slice(start,end+1)
            //         if(temp.length>ans.length)
            //         ans=temp
                    
            //     }
            // }
            let start=i-1;
            let end=i+1;
            while(start>=0 && end<s.length){
                if(s[start]!==s[end]){
                    if(ans.length<s.slice(start+1,end).length){
                    ans=s.slice(start+1,end)
                    console.log(ans)
                    }
                    break;
                }
                start--;
                end++;
            }
            if(ans.length<s.slice(start+1,end).length){
                    ans=s.slice(start+1,end)
                    console.log(ans)
                    }
            start=i-1;
            end=i;
            while(start>=0 && end<s.length){
                if(s[start]!==s[end]){
                    if(ans.length<s.slice(start+1,end).length){
                    ans=s.slice(start+1,end)
                    console.log(ans)
                    }
                    break;
                }
                start--;
                end++;
            }
            if(ans.length<s.slice(start+1,end).length){
                    ans=s.slice(start+1,end)}
        }
        return ans
    }
};