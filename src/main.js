// const myPromise = () => new Promise((resolve, reject) => {
//         return setTimeout(() => {
//             resolve('ok')
//         }, 2000);
//     }).catch((error) => {
//         console.log(error)
//     }) //Try/catch

// const myPromise = () => new Promise((resolve, reject) => {
//     return setTimeout(() => {
//         resolve('certo')
//     }, 2000)
// })

// myPromise().then(() => {
//     console.log('primeira vez')
// }).catch((error) => {
//     console.warn(error)
// })


// const exec = async() => {
//     try {
//         await myPromise()
//         console.log('primeira vez')

//         await myPromise();
//         console.log("segunda vez")

//     } catch (error) {
//         console.warn(error)
//     } finally {
//         console.log('finalizou')
//     }
// }

// exec()

// async function exec() {
//     const response = await myPromise()
//     console.log(response)
// }

// const exec = async() => {
//     const response = await myPromise()
//     console.log(response)
// }

// const exec = async() => {
//     await myPromise()
//     console.log('1 vez')

//     await myPromise()
//     console.log("2 vez")

//     await myPromise()
//     console.log("3 vez")
// }

// exec()


//e2017 /es8 /asunc/await

// myPromisse().then((response) => {
//     console.log(response)
// })



//Import/export

// import * as calculator from './calculator.js'
// console.log(calculator.sum(5, 5))
// console.log(calculator.sub(10, 3))

// import passarinho from './sum.js'
// console.log(passarinho(5, 5))

// import sum, { sub } from './sum'
// console.log(sum(5, 5))
// console.log(sub(10, 7))