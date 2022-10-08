const fs = require('fs').promises

const readFile = fs.readFile(`./json/lipsum.txt`, 'utf8')

readFile
  .then((data) => {
    console.log('reading is succesfull')
    return fs.writeFile(`./problem2/upperCase.txt`, data.toUpperCase(), 'utf8')
  })
  .then(() => {
    console.log('writing into uppercase is done')
    return fs.writeFile(`./filenames.txt`, 'upperCase.txt', 'utf8')
  })
  .then(() => {
    console.log('upperCase.txt name saved in filenames.txt')
    return fs.readFile(`./problem2/upperCase.txt`, 'utf8')
  })
  .then((data) => {
    console.log('reading is done from uppercase.txt')
    return fs.writeFile(`./problem2/lowerCase.txt`, data.toLowerCase(), 'utf8')
  })
  .then(() => {
    console.log('writing data into lowercase is done')
    return fs.appendFile(`./filenames.txt`, '\nlowerCase.txt', 'utf8')
  })
  .then(() => {
    console.log('lowerCase.txt name saved in filenames.txt')
    return fs.readFile(`./problem2/lowerCase.txt`, 'utf8')
  })
  .then((data) => {
    console.log('reading data from lower case file is done')
    let promiseArr = data
      .split('.')
      .map((sen) =>
        fs.appendFile(`./problem2/sentences.txt`, `${sen}.\n`, 'utf8'),
      )
    Promise.all(promiseArr)
  })
  .then(() => {
    console.log('saved in sentences.txt')
    return fs.appendFile(`./filenames.txt`, '\nsentences.txt', 'utf8')
  })
  .then(() => {
    console.log('sentences.txt file name saved in filenames.txt')
    return fs.readFile(`./problem2/sentences.txt`, 'utf8')
  })
  .then((data) => {
    console.log('reading data from sentences.txt is done')

    return fs.writeFile(
      `./problem2/sort.txt`,
      data.split('\n').sort().join('\n'),
      'utf8',
    )
  })
  .then(() => {
    console.log('sort.txt file is created')
    return fs.appendFile(`./filenames.txt`, '\nsort.txt', 'utf8')
  })
  .then(() => {
    console.log('sort.txt file is saved in filenames.txt')
    return fs.readFile(`./filenames.txt`, 'utf8')
  })
  .then((data) => {
    console.log('reading is succesfull from filenames.txt')
    data = data.split('\n').map((singleName) => {
      fs.unlink(`./problem2/${singleName}`)
    })
    return Promise.all(data)
  })
  .then(() => {
    console.log('all files deleted from filenames.txt')
  })
  .catch((err) => {
    console.error(err)
  })
