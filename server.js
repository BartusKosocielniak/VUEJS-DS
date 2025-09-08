const express = require("express")
const app = express()
const PORT = 3000;
const fs = require("fs")


app.get('/test', (req, res) => {
    const folders = fs.readdirSync(__dirname + "/static/cwiczenia");  
    console.log(folders)
    let data = {}
    let lessons = []
    folders.forEach(lesson => {
    const obj = fs.readdirSync(__dirname + "/static/cwiczenia/" + lesson)
        lessons.push(obj);
    });
    Object.assign(data, {folders: folders, lessons: lessons});
    res.json(data)
})


app.listen(PORT, function () {
    const filenames = fs.readdirSync(__dirname + "/static/cwiczenia"); 
    console.log("start serwera na porcie " + PORT )
    console.log(filenames)
})



