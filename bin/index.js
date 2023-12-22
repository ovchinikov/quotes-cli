const yargs = require("yargs");
const axios = require("axios");

const options = yargs.usage("Usage: -n <name>").option("n", {
  alias: "name",
  describe: "Your name",
  type: "string",
  demandOption: true,
});

const greeting = `Hello, Deogracious!`;
console.log(greeting);

const url = "https://type.fit/api/quotes";

axios.get(url, { headers: { Accept: "application/json" } }).then((res) =>
  res.data.forEach((q) => {
    console.log(`\n ${q.text} by - ${q.author}`);
  })
);
