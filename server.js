const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("SOE RECAP MYANMAR AI SERVER is running!");
});

app.listen(3000, () => {
  console.log("Server started");
});
