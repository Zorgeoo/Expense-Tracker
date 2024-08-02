const express = require("express");
const cors = require("cors");
const { accountRouter } = require("./routes/account.route");
const { categoryRouter } = require("./routes/category.route");

const app = express();

app.use(cors());
app.use(express.json());

const port = 3007;

app.get("", (req, res) => {
  res.send("Heelo beetches");
});

// app.get("/accounts", (req, res) => {
//   // return all acounts
// });

// app.post("/accounts", (req, res) => {
//   // create a new account
// });

// app.get("/categories", (req, res) => {
//   // return all categories
// });

// app.post("/categories", (req, res) => {
//   // create a new category
// });
app.use("/accounts", accountRouter);
app.use("/categories", categoryRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
