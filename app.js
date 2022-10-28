const express = require('express')
const fs = require('fs')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req,res) => {

    const userjson = fs.readFileSync("user.json", "utf-8")

    res.send(userjson)
})

app.listen(3000, ()=>{
    console.log('listening to port 3000')
})
