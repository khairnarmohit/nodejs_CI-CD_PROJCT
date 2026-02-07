const express = require("express");
const app = express();

app.get("/", (req, res) => {

  res.send("This Jenkins(CI/CD) Nodejs Project Mohit bhau cha final Dearm purna honacha start jala ahe Mohit bhau DEVOPS Eng 🔥");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Running on port 3000");
});

