import { require, readFile } from "fs/promises";

fs = require("fs");

fs.readFile("foo", "hello.json", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
