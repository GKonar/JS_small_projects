const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 1000)
})

const processData = async () => {  // async functions ALWAYS return Promise!!!!!
    let data = await getDataPromise(20) //await operator with a function which returns PROMISE
    data = await getDataPromise(data)   //resolve data saved in data const
    data = await getDataPromise(data)
    return data
}
processData()
    .then((data) => {
        console.log('Data', data)
    })
    .catch((err) => {
        console.log('Error', err)
    })  


// whitout using async 

// const processData  = () => {
//     let data = getDataPromise(10) // this function returns Promise
//     return data
// }

// processData() // promise chaining !!
//     .then((data) => {
//         return getDataPromise(data)
//     }).then((data) => {
//         return getDataPromise(data)
//     }).then((data) => {
//         console.log(data)
//     }).catch((err) => {
//         console.log(err)
//     });