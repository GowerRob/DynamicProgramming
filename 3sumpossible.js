const memo=[]

const sumposs=(amount,values)=>{
    if(memo[amount]){return memo[amount]}

    //base case 0, can all return zero
    if(amount==0){
        return true
    }
    const results=values.some(x=>{
        if(amount-x==0){
            return true}
        if(amount-x<0){
            return false}
        return sumposs(amount-x,values)

    })

    memo[amount]=results
    return results

}

//should give true
console.log(sumposs(4,[1,2,3]))

//reset the memo for new problem
memo.length=0

//should give false
console.log(sumposs(15,[4,6,10]))




