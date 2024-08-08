const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const userModel = require("./models/user");
app.get("/", async(req, res) => {
res.render("index");
// let allusers= await userModel.find()
// res.render("read",{allusers})
});

app.post("/create", async (req, res) => {
  let Createduser = await userModel.create({
    username: req.body.name,
    email: req.body.email,
    image: req.body.image
  });
  res.render("index")
});
app.get("/read", async (req, res) => {
  try {
    let allUsers = await userModel.find();
    res.render("read", { users: allUsers });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(8000);
