const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", { encoding: "utf8" });
stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (err) => {
  console.log(`error ${err} while reading the file`);
});
