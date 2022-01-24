const fs = readFile("foo", "hello.json", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
