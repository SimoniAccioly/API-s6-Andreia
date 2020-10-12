const express = require('express')
const app = express()
const posts = require('./routes/postsRoute')

app.use(express.json())
app.use("/", posts)

//@desc Facilita o import dentro do Server
module.export  = app

//dmckldklsdjdkfklsad