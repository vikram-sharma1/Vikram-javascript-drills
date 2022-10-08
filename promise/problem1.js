const fs = require('fs').promises

const randomNum = Math.round(Math.random() * 50)

const makedir = fs.mkdir(`./p1Dir${randomNum}`,)

let content = {
  data: 'Testing1',
  data2: 'Testing2',
}

makedir
  .then(() => {
    console.log('Directory Created')

    const numToCreateFile = Math.round(Math.random() * 5 + 2)
    
    let arr = []
    for (let i = 0; i < numToCreateFile; i++) {
      const numForFiles = Math.round(Math.random() * 50)

      arr.push(fs.writeFile(
        `./p1Dir${randomNum}/file${numForFiles}.json`,
        JSON.stringify(content),
        'utf-8',
      ))
    }

    console.log(`Number of Files Created ${numToCreateFile}`)
    return Promise.all(arr)
  })
  .then(() => {
    let filesName = fs.readdir(`./p1Dir${randomNum}`)
    return filesName
  })
  .then((data) => {
    let del = []
    data.forEach((singleFileName) => {
      del.push(fs.unlink(`./p1Dir${randomNum}/${singleFileName}`))
    })

    return Promise.all(del)
  }).then(()=>{
    console.log('All files Deleted')
  })
  .catch((err) => console.log(err))
