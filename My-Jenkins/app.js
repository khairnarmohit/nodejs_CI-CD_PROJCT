const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This Jenkins (CI/CD) Nodejs Project - Mohit DevOps ENG 🔥");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Running on port ${PORT}`);
});

