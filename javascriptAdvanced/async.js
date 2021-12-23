// const fs = require('fs/promises')

// function readFile() {
//     let fileData

//     // fs.readFile('data.txt', function (error, fileData) {
//     //     console.log('file parsing done')
//     //     console.log(fileData.toString())
//     // })
//     // console.log('hi there')

//     fs.readFile('data.txt').then(function() {
//         console.log('file parsing done');
//         console.log(fileData.toString());
//     })


// }

const fs = require('fs/promises')



 async function readFile() {
    // let fileData
    // fs.readFile('data.txt', function(error, fileData)  {
    //     console.log('parsing done');
    //     console.log(fileData.toString());
    // })

    const fileData = await fs.readFile('data.txt')
    // .then(function() {
    //     console.log('file Parsing done');
        console.log(fileData)
        console.log('hi there');
    }

 

 readFile()
 