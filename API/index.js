const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const port = 3007;

app.get("/", (req, res) => {
  res.json([{ title: "Mbappe" }, { title: "Giroud" }, { title: "Pogba" }]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
