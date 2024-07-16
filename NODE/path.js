// const path = require('path')
// // console.log("path: "+path);
// const normalizedPath = path.normalize("E:/../VIDU/java//java//.student")
// console.log("normalize: "+normalizedPath);

// const extName = path.extname("E:\VIDU\java\java\.student.Demo")
// console.log("ExtName: "+extName)

// const baseName = path.basename("E:\VIDU\java\java\.student.Demo");
// console.log("baseName: "+baseName);

// const dirName = path.dirname("E:\VIDU\java\java\.student.Demo");
// console.log("dirName: "+dirName);

// const joinPath = path.join("E:\VIDU\java\java\.student.Demo","abc.txt")
// console.log("joinPath: "+joinPath);

// const relative = path.relative("E:\VIDU\java\java\.student.Demo","abc.txt")
// console.log("relativePath: "+relative);

// const resolve = path.resolve("E:\VIDU\java\java\.student.Demo","abc.txt")
// console.log("resolvePath: "+resolve);

const fs = require('fs');

fs.renameSync('demo.txt', 'vidyy.txt');
let data = fs.readFileSync('demo.txt', 'utf-8');
console.log("data: " + data);

fs.appendFileSync('demo.txt', 'this is my first programm');
fs.writeFileSync('demo.txt', 'Vanilla js');

let data2 = fs.readFileSync('demo.txt', 'utf-8');
console.log("Data 2: " + data2);

let data3 = fs.readFileSync('demo.txt', 'utf-8');
console.log("data3: " + data3);