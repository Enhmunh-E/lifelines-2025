const express = require("express");
const fs = require("fs");
const crypto = require("crypto");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Middleware to check access code
function checkAccessCode(req, res, next) {
  const accessCode = req.headers["access-code"];
  const userId = req.headers["user-id"];
  if (!accessCode || !userId) {
    return res.status(400).send("Access code and user ID are required");
  }

  const userFilePath = `./data/${userId}.json`;
  if (!fs.existsSync(userFilePath)) {
    return res.status(404).send("User not found");
  }

  const userData = JSON.parse(fs.readFileSync(userFilePath));
  if (userData.accessCode !== accessCode) {
    return res.status(403).send("Invalid access code");
  }

  req.userFilePath = userFilePath;
  next();
}

// Generate user ID and access code
app.post("/generate", (req, res) => {
  const userId = crypto.randomBytes(16).toString("hex");
  const accessCode = crypto.randomBytes(16).toString("hex");

  const userData = {
    userId,
    accessCode,
    data: {},
  };

  fs.writeFileSync(`./data/${userId}.json`, JSON.stringify(userData, null, 2));
  res.json({ userId, accessCode });
});

// Create table for a specific user
app.post("/table", checkAccessCode, (req, res) => {
  const userData = JSON.parse(fs.readFileSync(req.userFilePath));
  if (!userData.tables) {
    userData.tables = {};
  }
  console.log(req.body);
  if (req.body.tableName in userData.tables) {
    return res.status(400).send("Table already exists");
  }
  if (!req.body.tableName || !req.body.tableType) {
    return res.status(400).send("Table name and table type are required");
  }
  // Check if table Type is valid with each keys being type
  for (const key in req.body.tableType) {
    if (
      !["string", "number", "boolean", "object"].includes(
        req.body.tableType[key]
      )
    ) {
      return res.status(400).send("Invalid data type");
    }
  }
  // Check keys of table and check if the key only consists of letters
  for (const key in req.body.tableType) {
    if (!req.body.tableType[key] || !/^[a-zA-Z]+$/.test(key)) {
      return res
        .status(400)
        .send("Invalid key, keys must only consist of letters");
    }
  }
  const { tableName, tableType } = req.body;
  userData.tables[tableName] = {
    data: [],
    type: tableType,
    size: 0,
  };
  fs.writeFileSync(req.userFilePath, JSON.stringify(userData, null, 2));
  res.json(userData.tables[tableName]);
});

// Update specific data with a specific field equals to the param from a table
app.put("/data/:table/:field/:value", checkAccessCode, (req, res) => {
  console.log("AYOOO");
  const { table, field, value } = req.params;
  const userData = JSON.parse(fs.readFileSync(req.userFilePath));
  if (!userData.tables || !userData.tables[table]) {
    return res.status(404).send("Table not found");
  }
  const tableType = userData.tables[table].type;
  for (const key in req.body) {
    if (typeof req.body[key] !== tableType[key]) {
      return res.status(400).send("Invalid data type");
    }
  }
  for (const key in req.body) {
    if (!tableType[key] || !/^[a-zA-Z]+$/.test(key)) {
      return res
        .status(400)
        .send("Invalid key or keys must only consist of letters");
    }
  }
  let updated = false;
  userData.tables[table].data = userData.tables[table].data.map((item) => {
    if (item[field] === value) {
      updated = true;
      return { ...item, ...req.body };
    }
    return item;
  });
  if (!updated) {
    return res.status(404).send("Data not found");
  }
  fs.writeFileSync(req.userFilePath, JSON.stringify(userData, null, 2));
  res.json("Successfully updated");
});

// Create data for a specific table
app.post("/data/:table", checkAccessCode, (req, res) => {
  const table = req.params.table;
  const userData = JSON.parse(fs.readFileSync(req.userFilePath));
  // Checks
  if (!userData.tables || !userData.tables[table]) {
    return res.status(404).send("Table not found");
  }
  // Check Types
  const tableType = userData.tables[table].type;
  for (const key in tableType) {
    if (typeof req.body[key] !== tableType[key]) {
      return res.status(400).send("Invalid data type");
    }
  }
  // Check keys of table and check if the key only consists of letters
  for (const key in req.body) {
    if (!tableType[key] || !/^[a-zA-Z]+$/.test(key)) {
      return res
        .status(400)
        .send("Invalid key or keys must only consist of letters");
    }
  }
  userData.tables[table].data = [
    {
      $id: userData.tables[table].size + 1,
      $created_at: new Date(),
      ...req.body,
    },
    ...userData.tables[table].data,
  ];
  userData.tables[table].size += 1;
  fs.writeFileSync(req.userFilePath, JSON.stringify(userData, null, 2));
  res.json(userData.tables[table].data[0]);
});

// Read data from a specific table
app.get("/data/:table", checkAccessCode, (req, res) => {
  const table = req.params.table;
  const { limit = null, page = 1 } = req.query;
  const userData = JSON.parse(fs.readFileSync(req.userFilePath));
  if (!userData.tables || !userData.tables[table]) {
    return res.status(404).send("Table not found");
  }
  if (!limit) {
    res.json(userData.tables[table].data);
    return;
  }
  const start = (page - 1) * limit;
  const end = page * limit;
  res.json(userData.tables[table].data.slice(start, end));
});

// Read specific data with a specific field equals to the param from a table
app.get("/data/:table/:field/:value", checkAccessCode, (req, res) => {
  const { table, field, value } = req.params;
  const userData = JSON.parse(fs.readFileSync(req.userFilePath));
  if (!userData.tables || !userData.tables[table]) {
    return res.status(404).send("Table not found");
  }
  const result = userData.tables[table].data.filter(
    (item) => item[field] === value
  );
  if (result.length === 0) {
    return res.status(404).send("Data not found");
  }
  res.json(result);
});

// Update data in a specific table
app.put("/data/:table/:id", checkAccessCode, (req, res) => {
  const table = req.params.table;
  const id = parseInt(req.params.id, 10);
  console.log(id);
  const userData = JSON.parse(fs.readFileSync(req.userFilePath));
  if (!userData.tables || !userData.tables[table]) {
    return res.status(404).send("Table not found");
  }
  // Check Types
  const tableType = userData.tables[table].type;
  for (const key in req.body) {
    if (typeof req.body[key] !== tableType[key]) {
      return res.status(400).send("Invalid data type");
    }
  }
  // Check keys of table and check if the key only consists of letters
  for (const key in req.body) {
    if (!tableType[key] || !/^[a-zA-Z]+$/.test(key)) {
      return res
        .status(400)
        .send("Invalid key or keys must only consist of letters");
    }
  }
  for (let i = 0; i < userData.tables[table].data.length; i++) {
    if (userData.tables[table].data[i].$id === id) {
      userData.tables[table].data[i] = {
        ...userData.tables[table].data[i],
        ...req.body,
      };
      fs.writeFileSync(req.userFilePath, JSON.stringify(userData, null, 2));
      return res.json(userData.tables[table].data[i]);
    }
  }
  return res.status(400).send("Data not found");
});

// Delete data from a specific table
app.delete("/data/:table/:id", checkAccessCode, (req, res) => {
  const table = req.params.table;
  const id = parseInt(req.params.id, 10);
  const userData = JSON.parse(fs.readFileSync(req.userFilePath));
  if (!userData.tables || !userData.tables[table]) {
    return res.status(404).send("Table not found");
  }
  for (let i = 0; i < userData.tables[table].data.length; i++) {
    if (userData.tables[table].data[i].$id === id) {
      userData.tables[table].data.splice(i, 1);
      fs.writeFileSync(req.userFilePath, JSON.stringify(userData, null, 2));
      return res.json("Successsfully deleted");
    }
  }
  return res.json("Data not found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
