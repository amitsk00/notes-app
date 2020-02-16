const val = require("validator");
const mydata = require("./mydata");
const chalk = require("chalk");
const yargs = require("yargs");

const myMsg = mydata();
// console.log(myMsg);

const msg = "Welcome to Node programing!!";
console.log(chalk.cyanBright(msg));

// handle add paraemter
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function() {
    console.log("Inside add function for notes");
  }
});

// handle remove parameter
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function() {
    console.log("Inside remove function for notes");
  }
});

//handle list parameter
yargs.command({
  command: "list",
  describe: "Describe a note",
  handler: function() {
    console.log("Inside list function for notes");
  }
});

//handle help parameter
yargs.command({
  command: "help",
  describe: "Help on the app",
  handler: function() {
    console.log("Inside help function for notes");
  }
});

console.log(yargs.argv);

console.log(chalk.bgRed.bold("End of the program ...."));
