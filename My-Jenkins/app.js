const express = require("express");
const app = express();

app.get("/", (req, res) => {

  res.send("This Jenkins(CI/CD) Nodejs Project Mohit Devops ENG send email 🔥");
});

app.listen(3001, "0.0.0.0", () => {
  console.log("Running on port 3001");
});

