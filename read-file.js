import { readFile } from "fs/promises";

readFile("./foo", "utf8").then((data) => {
  console.log(data);
});

readFile("./hello.json", "utf8").then((data) => {
  console.log(JSON.parse(data));
});
