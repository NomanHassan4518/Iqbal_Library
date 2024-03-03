const express = require("express");
const app = express();
const cors = require("cors");
// const port = 5000;
require("./db/config");
let User = require("./db/user");

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
      extended: false,
    }),
  );
  

app.use(cors());

app.get("/", (req, res) => {
    console.log("good");
  res.send("api is working...");
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/signup", async (req, res) => {
  let user = User(req.body);
  let result = await user.save();
  res.send(result);
});

app.post("/login", async (req, resp) => {
  let user = await User.findOne(req.body)
  console.log(req.body);
  resp.send(user)  
  }); 
   
  // Start the server
  const PORT = process.env.PORT || 5000; 
  app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
  });

  
// module.exports = app; 