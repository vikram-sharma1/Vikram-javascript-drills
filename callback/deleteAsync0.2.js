var fs = require("fs");

fs.readdir("./writeContent", (err, files) => {
  if (err) console.log(err);
  else {
    files.forEach((singleFile) => {
      fs.unlink(`./writeContent/${singleFile}`, (err) => {
        if (err) {
          console.log(err)
          return;
        }
        else{
          console.log(`File Deleted Sucessfully : ${singleFile}`)
        }
      });
    });
  }
});

