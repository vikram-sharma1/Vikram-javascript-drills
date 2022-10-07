/*
    Problem 2:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt

        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/

const fs = require('fs')

let num = Math.round(Math.random() * 50)

fs.readFile('./lipsum.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    // console.log(data)

    fs.writeFile(
      `./writeContent/upperCase${num}.txt`,
      data.toUpperCase(),
      (err) => {
        if (err) {
          console.log(err)
          return
        } else {
          console.log(`sucessfully converted the file`)

          let datainSen = data.toLowerCase().split('.').join('\n')

          // console.log(datainSen)
          fs.writeFile(
            `./writeContent/upperCase${num}.txt`,
            datainSen,
            'utf-8',
            (err, data) => {
              if (err) {
                console.log(err)
                return
              } else {
                console.log('data changed')

                fs.appendFile(
                  `./writeContent/breakSenLowerCase${num}.txt`,
                  datainSen,
                  (err) => {
                    if (err) {
                      console.log(err)
                    } else {
                      console.log('new sentence file created')

                      datainSen = datainSen.split('\n').sort().join('\n')
                      // console.log(datainSen)

                      fs.appendFile(
                        `./writeContent/dataSortedLowerCase${num}.txt`,
                        datainSen,
                        'utf8',
                        (err) => {
                          if (err) {
                            console.log(err)
                          } else {
                            fs.readdir('./writeContent', (err, files) => {
                              if (err) {
                                console.log(err)
                                return
                              } else {
                                // console.log(files)

                                fs.unlink(`./filenames.txt`, (err) => {
                                  if (err) {
                                    console.log(err)
                                    return
                                  }
                                })

                                files.forEach((singleName) => {
                                  fs.appendFile(
                                    './filenames.txt',
                                    `${singleName} `,
                                    (err) => {
                                      if (err) {
                                        console.log(err)
                                        return
                                      } else {
                                      }
                                    },
                                  )
                                })
                              }

                              fs.readFile(
                                './filenames.txt',
                                'utf-8',
                                (err, data) => {
                                  if (err) {
                                    console.log(err)
                                    return
                                  } else {
                                    let deleteList = data
                                      .split(' ')
                                      .slice(0, -1)
                                    console.log(deleteList)
                                    deleteList.forEach((singleFile) => {
                                      fs.unlink(
                                        `./writeContent/${singleFile}`,
                                        (err) => {
                                          if (err) {
                                            console.log('line', err)
                                            return
                                          } else {
                                            console.log('All clear')
                                          }
                                        },
                                      )
                                    })
                                  }
                                },
                              )
                            })
                          }
                        },
                      )
                    }
                  },
                )
              }
            },
          )
        }
      },
    )
  }
})
