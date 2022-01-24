import { readFile } from "fs/promises";

readFile("foo", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
