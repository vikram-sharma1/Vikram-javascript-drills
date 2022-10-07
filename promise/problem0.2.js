const fs = require('fs').promises

const deleteBoth = fs.readdir('./outputContent',)

deleteBoth.then((files)=>{
    return files
}).then((files)=> {
    files.forEach((singleFile) => {
        const deleteFileRes = fs.unlink(`./outputContent/${singleFile}`)
        console.log('File Deleted')
        return deleteFileRes
    })
}).catch(err => console.log(err))





