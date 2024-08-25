import fs from "fs";

// read the contents of a file
console.log("Starting to read a file"); // 1

// asynchronous/ non-blocking reading of a file content with encoding
// error first callback
fs.readFile("./Details.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("There is some error while reading the file", err);
  } else {
    console.log(data);
  }
});

console.log("Ending"); // 2
