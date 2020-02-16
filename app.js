const fs = require("fs");
const val = require("validator");
const mydata = require("./mydata");
const chalk = require("chalk");

const msg = "Welcome to Node programing!!";
console.log(chalk.red(msg));

fs.writeFileSync("./tmp.txt", "data something ");

const myMsg = mydata();
console.log(myMsg);
