
const express = require("express");
const app = express();
const port = 9000;

app.get("/", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
