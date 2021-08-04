const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.get("/exercise", (req, res) => {
  
  res.sendFile(path.join(__dirname,'/public/exercise.html'))
});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
