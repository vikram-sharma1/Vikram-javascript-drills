const fs = require('fs').promises

const randomNum = Math.round(Math.random() * 50)
const readFilePromise = fs.readFile('./json/sampleData.json', "utf8")

readFilePromise.then((data)=>{
    const writeFilePromise = fs.writeFile(`./outputContent/copy0.1${randomNum}.txt`,data, "utf8")

    return writeFilePromise
}).then(()=>{
   return fs.unlink('./json/sampleData.json')
}).then(()=>{
   return fs.unlink(`./outputContent/copy0.1${randomNum}.txt`)
}).catch(err => console.log(err))
