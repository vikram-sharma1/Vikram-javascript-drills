// 0.1
// Read a json file. Write the contents to a new file.

// 0.2
// Delete both the files simultaneously

// 0.3
// Read a json file. Write the contents to a new file. Delete the first file.
// Only after first file is deleted, delete the second file.

/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/

// 0.1

const fs = require("fs");

fs.readFile("./json/randomData.json", "utf-8", (err, data) => {
  if (err) {
    console.log(`Error : ${err}`);
    return;
  } else {
    let a = Math.round(Math.random() * 50);

    fs.appendFile(`./writeContent/dataFile${a}.js`, data, "utf-8", (err) => {
      if (err) {
        console.log(`Error : ${err}`);
        return;
      }
      console.log("File Written Sucessfully");
    });
  }
});
