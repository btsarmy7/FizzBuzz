const _ = require('lodash')

// checks divisibility 
let divide = (a, b) => {
    if(a % b === 0){
        return true
    }else
         return false
}

// returns number and Fizz, Buzz, or FizzBuzz depending on divisibility
let message = (x) => {
    if(divide(x, 3)){
        if(divide(x, 5)){
            return x + ": FizzBuzz"
        }else
            return x + ": Fizz"
    }else if(divide(x, 5)){
        return x + ": Buzz"
    }else 
        return null
        
}

// test
console.log(message(50)) // 50: Buzz
console.log(message(15)) // 15: FizzBuzz
console.log(message(7)) // null
console.log(message(9)) // 9: Fizz


// returns an array of messages using _.filter and _.map from lodash
let messagesFilteredMap = (arrr) =>{
    let m = _.map(arrr, message) 
    return _.filter(m, null) // filter out all the null values
}


// test
let a = [3, 5, 6, 7, 90, 50]
console.log(message(a.shift())) // 3: Fizz
console.log(messagesFilteredMap(a)) // [ '5: Buzz', '6: Fizz', '90: FizzBuzz', '50: Buzz' ]


// generates FizzBuzz array in given range start(inclusive) to end (exclusive)
let messageRange = (start, end) =>{
    let aRange = _.range(start, end)
    return messagesFilteredMap(aRange)
}

// test
console.log(messageRange(1, 100))