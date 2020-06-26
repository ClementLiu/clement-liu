var finder = require("findit")(".");
var path = require("path");
var fs = require("fs");

/* finder.on("file", function (file, stat) {
  console.log(file);
});
 */

finder.on("directory", function (dir, stat, stop) {
  var base = path.basename(dir);
  if (base !== ".") stop();
  else {
    console.log(dir);
    finder.on("file", function (file, stat) {
      files.forEach((element) => {
        if (file === element) {
          // fs.copyFileSync(file, `copied/${file}`);
          fs.copyFileSync(file, `test/${file}`);
          console.log(file);
        }
      });
    });
  }
});

const files = [
  "visual-gig-v1.0.jpg",
  "disassemble-thumb-v0.2.jpg",
  "headphone-thumb-v0.3.jpg",
  "clement-dark-v0.1.png",
];
