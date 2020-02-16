const val = require("validator");
const mydata = require("./mydata");
const chalk = require("chalk");
const yargs = require("yargs");

const myMsg = mydata();
// console.log(myMsg);

const msg = "Welcome to Node programing!!";
console.log(chalk.cyanBright.bgGreen(msg));

// handle add paraemter
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Title of the note should be given with this param",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Body or content of the note should be given with this param",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    console.log("Inside add function for notes");
    console.log(chalk.bgGray("Title is : " + argv.title));
    console.log(chalk.white("Body of note is: " + argv.body));
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

// console.log(yargs.argv);
yargs.parse();

console.log(chalk.bgRed.bold("End of the program ...."));
