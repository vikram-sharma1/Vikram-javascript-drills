const fs = require("fs");

fs.readFile("./json/randomData.json", "utf-8", (err, data) => {
  if (err) {
    console.log(`Error : ${err}`);
    return;
  } else {
    console.log(data)
    fs.appendFile(`./writeContent/problem3.js`, data, "utf-8", (err) => {
      if (err) {
        console.log(`Error : ${err}`);
        return;
      }
      console.log("File Written Sucessfully");

      fs.unlink(`./json/randomData.json`, (err) => {
        if (err) {
          console.log(err)
          return;
        }
        else{
          console.log(`First File Deleted Sucessfully`)

          fs.unlink(`./writeContent/problem3.js`, (err) => {
            if (err) {
              console.log(err)
              return;
            }
            else{
              console.log(`Second File Deleted Sucessfully`)
              console.log('Task Completed');
            }
          });            
        }
      });
      
    });
  }
});





