const cp = require("child_process");
const { log } = require("console");
cp.exec("dir: ",(data,stdout,stdin)=>{
    console.log(stdout);
});
