class Solution {
public:
    string reverseWords(string s) {
        string tempStr="";
        string newStr="";
        int n=s.size();
        for(int i=n-1;i>=0;i--){
            if(s[i]==' ' && tempStr.size()!=0){
                if(newStr.size()!=0){
                    newStr=newStr+" ";
                }
                for(int j=tempStr.size()-1;j>=0;j--){
                    newStr=newStr+tempStr[j];
                }
                tempStr="";
            } else if(s[i]==' '){
                continue;
            } else {
                tempStr=tempStr+s[i];
            }
        }
        if(newStr.size()!=0 && tempStr.size()!=0){
            newStr=newStr+" ";
        }
        for(int j=tempStr.size()-1;j>=0;j--){
            newStr=newStr+tempStr[j];
        }
        return newStr;
    }
};