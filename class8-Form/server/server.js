const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/enroll", function (req, res) {
  //res.send("Hello from Server..!");
  //console.log(req.body); // It contains the user data that was submitted by the angular application.
  res.status(401).send({ message: "Data Received..!" }); // Displaying the error message
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
