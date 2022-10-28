const express = require('express')
const fs = require('fs')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
    origin: '*'
}))

app.get('/', (req,res) => {

    const userjson = fs.readFileSync("user.json", "utf-8")

    res.send(userjson)
})

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Now listening to port ${PORT}`)
})
