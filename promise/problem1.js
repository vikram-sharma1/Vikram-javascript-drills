const fs = require('fs').promises

const randomNum = Math.round(Math.random() * 50)

const makedir = fs.mkdir(`./p1Dir${randomNum}`)

makedir
  .then(() => {
    console.log('Directory Created')

    const numToCreateFile = Math.round(Math.random() * 5 + 2)
    let content = {
      data: 'Testing1',
      data2: 'Testing2',
    }

    for (let i = 0; i < numToCreateFile; i++) {
      const numForFiles = Math.round(Math.random() * 50)

      fs.writeFile(
        `./p1Dir${randomNum}/file${numForFiles}.json`,
        JSON.stringify(content),
        'utf-8',
      )
    }

    console.log(`Number of Files Created ${numToCreateFile}`)
  })
  .then((data) => {
    let filesName = fs.readdir(`./p1Dir${randomNum}`)
    return filesName
  })
  .then((data) => {
    console.log(data)
    data.forEach((singleFileName) => {
      const deleteFileRes = fs.unlink(`./p1Dir${randomNum}/${singleFileName}`)
      console.log('File Deleted')
      return deleteFileRes
    })
  })
  .catch((err) => console.log(err))
