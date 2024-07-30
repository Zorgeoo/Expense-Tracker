const { Router } = require("express");

const {
  getAllAccounts,
  createAccount,
  createAccount,
} = require("../controllers/account.controller");

const accountRouter = Router();

accountRouter.get("/a", getAllAccounts).post("/", createAccount);

module.exports = { accountRouter };
