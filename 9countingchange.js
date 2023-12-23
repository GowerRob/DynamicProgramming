const memo={}

const countingChange=(amount, coins, coinIndex=0)=>{
    if(memo[amount+''+coinIndex])return memo[amount+''+coinIndex]

    if(amount==0){
        return 1;
    }

    if(coinIndex>=coins.length){return 0}

    let totalWays=0;
    const coinValue=coins[coinIndex]
    for (let qty=0;(qty*coinValue)<=amount;qty++){
        let subAmount=amount-qty*coinValue;
        totalWays+=countingChange(subAmount, coins, coinIndex+1)
    }
    memo[amount+''+coinIndex]=totalWays
    return totalWays;
}




console.log(countingChange(1000, [1, 5, 10, 25]))
console.log(memo)