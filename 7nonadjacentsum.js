const nums = [2, 4, 5, 12, 7];

// const nums = [
//     72, 62, 10,  6, 20, 19, 42, 46, 24, 78,
//     30, 41, 75, 38, 23, 28, 66, 55, 12, 17,
//     83, 80, 56, 68,  6, 22, 56, 96, 77, 98,
//     61, 20,  0, 76, 53, 74,  8, 22, 92, 37,
//     30, 41, 75, 38, 23, 28, 66, 55, 12, 17,
//     72, 62, 10,  6, 20, 19, 42, 46, 24, 78,
//     42
//   ];

const memo=[]

const nonAdjacentSum=(numbers, index, memo={})=>{
    if(index in memo) return memo[index]
    
    //base case
    //our index is past the end of the array (considering an empty set)
    if(index>= numbers.length){
        return 0}

    //recursive call i+2 is a non adjacent number
const include=numbers[index]+nonAdjacentSum(numbers,index+2, memo)

    //option where we don't take the first number
const exclude= nonAdjacentSum(numbers, index+1, memo)

memo[index]=Math.max(include,exclude)
return memo[index]

}




console.log(nonAdjacentSum(nums,0))