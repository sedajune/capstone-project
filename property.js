import { readFile } from "fs/promises";

readFile("./hello.json", "utf8")
  .then((data) => {
    return JSON.parse(data);
  })
  .then((data) => {
    const [name] = process.argv.slice(2);
    console.log("name:", name, data);
  });

// const [key, value] = process.argv.slice(2);
//data[key] = value;
//return data;
//});.then((data) => {
//writeFile("./hello.json", JSON.stringify(data, null, 4));
//})
