
const memo=[]

const summingSquares = (n) => {
    if(memo[n]){return memo[n]}
 
    if(n===0)return 0;

    let minSquares=Infinity;
    for (let i=1;i<=Math.sqrt(n);i++){
        const square=i*i;
        const numSquares=summingSquares(n-square)+1;
        if(numSquares<minSquares){minSquares=numSquares}
    }
    memo[n]=minSquares;
    
    return minSquares;
  };

  

  console.log(summingSquares(87))