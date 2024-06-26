const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();




const PORT = 3000;


app.use(express.json());
app.use(cors());



app.get("/", (req, res) => {
  res.json({ message: "Express is running." });
});



app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});