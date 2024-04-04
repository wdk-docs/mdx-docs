const fs = require("node:fs");
const path = require("node:path");
const util = require("util");

const isFile = (fileName) => {
  return fs.lstatSync(fileName).isFile();
};
const isDir = (dirName) => {
  return fs.lstatSync(dirName).isDirectory();
};

const folderPath = "./src/content/";
try {
  if (!fs.existsSync(folderPath)) {
    // fs.mkdirSync(folderName);
    console.error("目录不存在");
  }
} catch (err) {
  console.error(err);
}

// let files = fs.readdirSync(folderPath);
// files = files
//   .map((fileName) => {
//     return path.join(folderPath, fileName);
//   })
//   .filter(isFile);
const filterPath = (filePath) => {
  //   console.log("filterPath:", filePath);
  return filePath.replace("src/content/", ""); //.replace(/(\d{1,2}-)/g, "");
};
const readDocsDir = (folderPath) => {
  let files = fs.readdirSync(folderPath);
  let fileMap = [];
  for (let fileName of files) {
    let file = path.join(folderPath, fileName);
    if (isFile(file)) fileMap.push(filterPath(file));
    if (isDir(file)) {
      //   console.log(file);
      //   fileMap.push({ path: fileName, file: readDocsDir(file) });
      //   fileMap.push(readDocsDir(file));
      readDocsDir(file).map((fileSub) => fileMap.push(filterPath(fileSub)));
    }
  }
  return fileMap;
};

let mapPath = {};
readDocsDir(folderPath).map((file) => {
  let key = file
    .replace(".mdx", "")
    .replace("/index", "")
    .replace(/(\d{1,2}-)/g, "");
  mapPath[key] = file;
});

try {
  fs.writeFileSync("./src/nav/link.map.json", JSON.stringify(mapPath, null, 2), "utf8");
} catch (err) {
  console.error(err);
}
// console.log(files);
// console.log(util.inspect(mapPath, { showHidden: false, depth: null, colors: true }));
