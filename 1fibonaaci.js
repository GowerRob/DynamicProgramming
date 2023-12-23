const memo=[]

const fib=(n)=>{
    if(memo[n])
    {return memo[n]}
    
    if(n===0||n===1){
        return 1
    }
    const result=fib(n-1)+fib(n-2)
    memo[n]=result
    return result
}

console.log(fib(200))