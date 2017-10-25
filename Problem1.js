const _ = require('lodash')

//In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120
//Your mission is simple: write a function that takes an integer n and returns the value of n!.

let factorial = (n) =>{
    if(n <= 1){
        return 1 
    }else
    return n * factorial(n - 1)
}

console.log(factorial(5)) // 120


//Given an array of numbers and a number n, and your task will be to determine if any array elements, when summed (or taken individually), are divisible by n.
//For example:
//solve([1,3,4,7,6],9) = True, because 3 + 6 is divisible by 9; solve([1,2,3,4,5],10) = True for similar reasons.
//solve([8,5,3,9],7) = True), because 7 evenly divides 5 + 9, but solve([8,5,3],7) = False.

let solve = (array, x) =>{
    
    if(checkArray(x, array)) {
           return true
    }else{      
        while(array.length > 0){
            let prev = array[0] 
            array.shift()
            array = summed(prev, array)
            if(checkArray(x, array)){
                return true
            }
            summed(-prev, array)
        } return false
    }

}

let summed = (a, arr) => {
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i] + a    
    }
    return arr
}

let checkArray = (a, arr) =>{
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % a === 0){
            return true;
        }
    } return false
}

let a = [1,2,3,4,5]
console.log(solve(a, 7))
let b = [1,2,3,4,5]
console.log(solve(b, 9))
let c = [1,2,3,4,5]
console.log(solve(c, 11))
let d = [1,2,3,4,5]
console.log(solve(d, 9))