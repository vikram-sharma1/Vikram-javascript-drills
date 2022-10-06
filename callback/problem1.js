const fs = require('fs')
// let content = require('./json/sampleData.json')

let dirRandomNum = Math.round(Math.random() * 50)

fs.mkdir(`./Task${dirRandomNum}`, (err) => {
  if (err) {
    console.error(err)
    return
  } else {
    console.log('Directory created successfully!')

    let content = {
      data: 'Testing1',
      data2: 'Testing2',
    }

    let toCreateRandomTimes = Math.round(Math.random() * 5 + 2)

    for (let i = 0; i < toCreateRandomTimes; i++) {
      let fileRandomNum = Math.round(Math.random() * 50)
      fs.writeFile(
        `./Task${dirRandomNum}/file${fileRandomNum}.json`,
        JSON.stringify(content),
        'utf-8',
        (err) => {
          if (err) {
            console.error(err)
            return
          } else {
            console.log('file created & written successfully')
          }
        },
      )
    }

    fs.readdir(`./Task${dirRandomNum}`, (err, files) => {
      if (err) {
        console.log(err)
        return
      } else {
        console.log(files)

        files.forEach((singlefile) => {
          fs.unlink(`./Task${dirRandomNum}/${singlefile}`, (err) => {
            if (err) {
              console.log(err)
              return
            } else {
              console.log('All files deleted sucessfully')
              console.log('Task Done')
            }
          })
        })
      }
    })
  }
})
