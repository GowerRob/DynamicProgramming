
function arraystepper(nums, i = 0,memo={}) {
    if(i in memo)return memo[i]

    if (i >= nums.length - 1) { return true} 
    
    const moves = nums[i]
    for (let j = 1; j <= moves; j++) {
        if (arraystepper(nums, i + j,memo) === true) {
            memo[i]=true
            return true
        }
    }
    memo[i]=false
    return false

console.log(memo)

}




console.log(arraystepper([2, 4, 2, 0, 0, 1]))
console.log(arraystepper([2, 3, 2, 0, 0, 1]))
console.log(arraystepper([4, 1, 2, 1, 1, 1, 0, 4]))
console.log(arraystepper([1, 1, 1, 1, 0, 0]))
console.log(arraystepper([ 
    31, 30, 29, 28, 27,
    26, 25, 24, 23, 22,
    21, 20, 19, 18, 17,
    16, 15, 14, 13, 12,
    11, 10, 9, 8, 7, 6,
    5, 3, 2, 1, 0, 0, 0
  ]))