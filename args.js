// expected:
// ["foo", "bar", "baz"]

// command: node args.js foo bar baz

//const args = process.argv.slice(2);
//console.log(args);

//console.log(process.argv);

const [command, file, ...args2] = process.argv;
console.log(args2);
