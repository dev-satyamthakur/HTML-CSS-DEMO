// function fun(a) {
//     if (a == 0)
//         return

//     console.log(a)

//     fun(a-1)
// }

// let a = 10
// var b = 20

// console.log(a)
// console.log(b)

// var myvar = 10
// console.log(myvar)

// myvar = 5
// console.log(myvar)

// myvar = "Fruit"
// console.log(myvar)

const fruits = ["Apple", "Mango", "Orange"]
const newfruits = fruits.map(function (cvalue) {
    return cvalue + "Neo";
})
console.log(fruits)
console.log(newfruits)

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}


