const memo=[]

//min coins required is the shortest path from root to leaf 

const minchange=(amount, coins)=>{
    if(memo[amount]){return memo[amount]}

    if(amount==0){return 0}

    if(amount<0){ return -1}

    //find the minimum number of subcoins , return -1 if not possible
    let minCoins =-1
    coins.forEach(coin=>{
        let subAmount=amount-coin
        //this needs to pass back the minimum number of coins to make the subamount
        let subCoins=minchange(subAmount,coins)
        if (subCoins!==-1){
            let numCoins=subCoins+1
            if(numCoins<minCoins||minCoins==-1){
                minCoins=numCoins;
            }
        }
    })
    memo[amount]=minCoins

    return minCoins

}


console.log(minchange(448,[1,2]))