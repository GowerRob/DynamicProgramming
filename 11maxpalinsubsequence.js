
const maxpalin=(str,start=0,end=str.length-1,memo={})=>{
    const key=start+" "+end
    if(key in memo)return memo[key]
    //represents a single character
    if(start===end) return 1
    
    //represents a cross over, eg. an empty string
    if(start>end) return 0

    

    if(str[start]===str[end]){
        memo[key]=maxpalin(str,start+1,end-1,memo)+2
        return memo[key]
    }else{
        memo[key]=Math.max(maxpalin(str,start+1,end,memo),maxpalin(str,start,end-1,memo))
        return memo[key]

    }


}


console.log(maxpalin("qwueoiuahsdjnweuueueunasdnmnqweuzqwerty"))
console.log(maxpalin("enamelpinportlandtildecoldpressedironyflannelsemioticsedisonbulbfashionaxe"))