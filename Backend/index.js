const express = require("express");
const app = express();
const cors = require("cors");
// const port = 5000;
require("./db/config");
let User = require("./db/user");

var bodyParser = require('body-parser')

app.use(cors());

app.get("/", (req, res) => {
  res.send("api is working...");
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/signup", async (req, res) => {
  let user = User(req.body);
  let result = await user.save();
  console.log(result);
  res.send(result);
});

app.post("/asas", async (req, res) => {
    try {
     const user = await User.findOne(req.body)
     console.log(user);
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).send("Internal Server Error");
    }
  });
  
  // Start the server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
