/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let zeroRow=false;
        let n=matrix.length
        let m=matrix[0].length
        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                if(matrix[i][j]==0){
                    if((i==0) && (j==0) ){
                        zeroRow=true;
                        matrix[0][0]=0;
                    } else if(j==0){
                        matrix[0][0]=0;
                    } else if(i==0){
                        zeroRow=true;
                    } else{
                        matrix[i][0]=0;
                        matrix[0][j]=0;
                    }
                }
            }
        }

        for(let i=1;i<n;i++){
            if(matrix[i][0]==0){
                for(let j=1;j<m;j++){
                    matrix[i][j]=0;
                }
            }
        }
        for(let j=1;j<m;j++){
            if(matrix[0][j]==0){
                for(let i=1;i<n;i++){
                    matrix[i][j]=0;
                }
            }
        }
        if(zeroRow && matrix[0][0]==0){
            for(let j=0;j<m;j++){
                    matrix[0][j]=0;
                }
            for(let i=0;i<n;i++){
                    matrix[i][0]=0;
                }
        }else if(matrix[0][0]==0){
            for(let i=0;i<n;i++){
                    matrix[i][0]=0;
                }
        } else if(zeroRow){
            for(let j=0;j<m;j++){
                    matrix[0][j]=0;
                }
        }
    
};