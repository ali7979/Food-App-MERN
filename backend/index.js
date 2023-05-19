const express = require('express')
const connectdb = require('./db/Connectdb')
const cors = require("cors");
const app = express()

const dotenv=require('dotenv').config();


app.use(cors())

// app.use((req, res, next)=> {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 
//     'Origin,X-Requested-With,Content-Type,Accept');
   
//     next();
// });

app.use(express.json())



app.get('/', (req, res) => {
  res.send('Backend Runnig')
 
})

connectdb();

app.use("/api",require("./routes/CreateUser"))
app.use("/api",require("./routes/Fetch"))
app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}`)
})