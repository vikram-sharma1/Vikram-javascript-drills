const fs = require('fs').promises

const randomNum = Math.round(Math.random() * 50)
const readFilePromise = fs.readFile('./json/sampleData.json', 'utf8')

readFilePromise
  .then((data) => {
    const writeFilePromise = fs.writeFile(
      `./outputContent/copy0.1${randomNum}.txt`,
      data,
      'utf8',
    )
    console.log('Copy File has been created')
    return writeFilePromise
  })
  .then(() => {
    const firstFileDelete = fs.unlink('./json/sampleData.json')
    console.log('Deleted First file')

    return firstFileDelete
  })
  .then(() => {
    const secFileDelete = fs.unlink(`./outputContent/copy0.1${randomNum}.txt`)
    console.log('Deleted Second file')

    return secFileDelete
  })
  .catch((err) => console.log(err))
