const express = require('express')
const app = express()
const port = 8000
const dotenv = require("dotenv");

const cors = require("cors");

const corsOption = {
    origin: "http://localhost:3000",
    credentials: true,
};

app.use(cors(corsOption));
app.use(express.json());


dotenv.config();

app.get('/test-api', (req, res) => {
    res.send('Test')
})
app.get('/', (req, res) => {
  res.send('Hello World! 2')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})