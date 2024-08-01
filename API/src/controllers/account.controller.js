const { error } = require("console");
const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid");

const getAllAccounts = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "accounts.json");

    const rawData = fs.readFileSync(filePath);

    const accounts = JSON.parse(rawData);

    res.json(accounts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "internal server error" });
  }
};

const createAccount = async (req, res) => {
  console.log(req.body, "Henlo");
  try {
    const filePath = path.join(__dirname, "..", "data", "accounts.json");

    const rawData = fs.readFileSync(filePath);

    const accounts = JSON.parse(rawData);

    const newAccount = { ...req.body, id: v4() };

    console.log(newAccount);
    accounts.push(newAccount);
    fs.writeFileSync(filePath, JSON.stringify(accounts, null, 2));
    res.json(newAccount);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "internal server error" });
  }
};

const deleteAccount = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "accounts.json");
    const { id } = req.params;

    const rawData = fs.readFileSync(filePath);
    let accounts = JSON.parse(rawData);

    accounts = accounts.filter((account) => account.id !== id);

    fs.writeFileSync(filePath, JSON.stringify(accounts, null, 2));
    res.status(204).end();
  } catch (error) {
    console.error("Error deleting account:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteAllAccount = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "accounts.json");

    const rawData = fs.readFileSync(filePath);

    const accounts = JSON.parse(rawData);

    accounts.splice(0, accounts.length);

    fs.writeFileSync(filePath, JSON.stringify(accounts));
    console.log(req.body);
    res.json({ message: "Success" });
  } catch (error) {
    console.error("Error deleting account:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
// const deleteAllAccount = async (req, res) => {
//   console.log(req.body);
//   try {
//     const filePath = path.join(__dirname, "..", "data", "accounts.json");

//     const rawData = fs.readFileSync(filePath);

//     const accounts = JSON.parse(rawData);

//     const deleteAll = accounts.splice(0, accounts.length);

//     fs.writeFileSync(filePath, JSON.stringify(accounts));

//     res.json({ message: "Account successfully deleted", deleteAll });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Interval Server Error" });
//   }
// };
// const updateAccount = async (req, res) => {
//   try {
//     const { id } = req.params; // Extract account ID from the URL
//     const updatedData = req.body; // Extract updated account data from the request body

//     // Read the existing accounts from the file
//     let accounts = await readAccountsFromFile();

//     // Find the index of the account to update
//     const index = accounts.findIndex((account) => account.id === id);

//     if (index === -1) {
//       // If account with the given ID is not found
//       return res.status(404).json({ error: "Account not found" });
//     }

//     // Update the account with new data
//     accounts[index] = { ...accounts[index], ...updatedData };

//     // Write the updated accounts back to the file
//     await writeAccountsToFile(accounts);

//     // Send the updated account as the response
//     res.json(accounts[index]);
//   } catch (error) {
//     console.error("Error updating account:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

module.exports = {
  getAllAccounts,
  createAccount,
  deleteAccount,
  deleteAllAccount,
};
