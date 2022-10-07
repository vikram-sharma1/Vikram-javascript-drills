const fs = require('fs').promises

const readFilelipsum = fs.readFile('./json/lipsum.txt', 'utf8')

readFilelipsum
  .then((data) => {
    // console.log(data)
    return data
  }).then((data)=>{
    data = data.toUpperCase()
    // console.log(data)
    fs.writeFile(`./problem2/fileUpper.json`,
        JSON.stringify(data),
        'utf-8',
      )

      console.log('File Created in Upper case')
      return data

  }).then((data)=>{

    data = data.toLowerCase().split('.').join('\n')
    // console.log(data);

    fs.writeFile(`./problem2/fileUpperSplitSen.json`,
        JSON.stringify(data),
        'utf-8',
      )

      console.log('File Created in Lower case & seperated in Lines')
      return data

  }).then((data)=>{

    data = data.split(',').sort().join('.')
    // console.log(data);

    fs.writeFile(`./problem2/fileUpperSplitSenSorted.json`,
        JSON.stringify(data),
        'utf-8',
      )

      console.log('File Created in Lower case & Sorted')


      return

  }).then(()=>{
    const filesNames = fs.readdir('./problem2')
    return filesNames
  }).then((filenames)=>{

        fs.unlink('./filenames.txt')

        filenames.forEach((singleFileName)=>{
            fs.appendFile('./filenames.txt', `${singleFileName} ` )
        })
        console.log('Names of the files has been stored')

        return filenames
  }).then(()=>{
        const namestoDelete = fs.readFile('./filenames.txt', "utf8")
        return namestoDelete
  }).then((namestoDelete)=>{
    console.log(namestoDelete);
        namestoDelete.split(' ').slice(0,-1).forEach((singleName)=>{
            fs.unlink(`./problem2/${singleName}`)
        })

        console.log('All File Deleted')
  })
  .catch((err) => console.log(err))
