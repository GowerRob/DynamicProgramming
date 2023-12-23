const memo=[]

const tribonacci=(n)=>{
    if(memo[n])
    {return memo[n]}

    if(n==0){return 0}
    if(n==1||n==2)
    {
        return 1
    }

    const result =tribonacci(n-1)+tribonacci(n-2)+tribonacci(n-3)
    memo[n]=result
    return result

}

console.log(tribonacci(80))