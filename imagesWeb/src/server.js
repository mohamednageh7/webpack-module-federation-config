const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const port = 9002


app.get('/',(req,res) => {
    const pathToHtmlFils = path.resolve(__dirname,'../dist/image.html')
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFils,'utf-8')

    res.send(contentFromHtmlFile)
})

app.use('/',express.static(path.resolve(__dirname,'../dist/')))

app.listen(port,() => {
    console.log('Running on port',port)
})