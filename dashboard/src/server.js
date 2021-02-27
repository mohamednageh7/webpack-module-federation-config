const express = require('express')
const app = express()

const path = require('path')
const fs = require('fs')

app.use('/',express.static(path.resolve(__dirname,'../dist')))

app.get('*',(req,res) => {
    const pathToHtmlFile = path.resolve(__dirname,'../dist/dashboard.html')

    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile,'utf-8')

    res.send(contentFromHtmlFile)

})

app.listen(9000,() => {
    console.log('Listent in port 9000')
})