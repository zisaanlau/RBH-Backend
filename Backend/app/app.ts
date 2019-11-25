import express = require("express");

const app: express.Application = express();
app.get("/", function(req, res) {
  res.send("Hello World!");
});
app.listen(8888, function() {
  console.log("Example app listening on port 8888!");
});
