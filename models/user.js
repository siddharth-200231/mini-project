const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/users", {
  
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Connection error", error);
});

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    image: String
});

module.exports = mongoose.model("User", userSchema);
