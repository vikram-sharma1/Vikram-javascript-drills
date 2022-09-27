const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code. 
/*
  Complete the following functions.
  These functions only need to work with arrays.
  A few of these functions mimic the behavior of the `Built` in JavaScript Array Methods.
  The idea here is to recreate the functions from scratch BUT if you'd like,
  feel free to Re-use any of your functions you build within your other functions.
  **DONT** Use for example. .forEach() to recreate each, and .map() to recreate map etc.
  You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
*/


function cbEach(num) {
    console.log(`Indexes are ${num}`)
}

function each(elements, cb) {


    for (let i = 0; i < elements.length; i++) {
        console.log(`Values are ${elements[i]}`)
        cb(i)
    }




}

each(items, cbEach)

// console.log('---------------------------------------------------------------------------------------------');


function map(elements, cb) {


    let newArr = []

    for (let items of elements) {
        let results = cb(items)
        newArr.push(results)
    }

    return (newArr)


}

let mapArr = map(items, (element, i, arrRef) => element)
console.log(mapArr)


// console.log('---------------------------------------------------------------------------------------------');


const cbReduce = (initialValue, current) => initialValue + current;

function reduce(elements, cb, startingValue) {
    let value = startingValue;

    for (let items of elements) {
        let currentValue = items
        value = cb(value, currentValue)
    }

    return value;
}

const reduceArr = reduce(items, cbReduce, 0)

console.log(reduceArr);
// console.log('---------------------------------------------------------------------------------------------');

function cbFind(a) {
    if (!a) {
      console.log(`undefined`);
    } else {
      console.log(a);
    }
  }

function find(elements, cb) {

    for (let i of elements) {
        cb(i)
    }
}

find(items, cbFind)


// console.log('---------------------------------------------------------------------------------------------');

function filter(elements, cb) {


    let newArr = []

    for (let items of elements) {
        let results = cb(items)
        if (results) {
            newArr.push(items)
        }
    }

    return (newArr)


}

let filterAns = filter(items, (element, i, arrRef) => element % 2 == 0)
console.log(filterAns);


// console.log('---------------------------------------------------------------------------------------------');


const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

function flatten(elements) {


    let finalflattenArray = []

    for (let item of elements) {
        if (Array.isArray(item)) {
            finalflattenArray.push(...flatten(item))
        }
        else {
            finalflattenArray.push(item)
        }
    }

    return finalflattenArray
}

console.log(flatten(nestedArray));