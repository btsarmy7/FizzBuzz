const _ = require('lodash')

let a = _.range(1, 100)

let addOne = (arr) => {
    let incArr = []
    for(let i = 0; i < arr.length; i++){
        incArr[i] = arr[i] + 1
    } return incArr
}

console.log(addOne(a))

