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
})


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/static/index.html")
})

app.use(express.static('static'))
// 
app.use(express.static('static/cwiczenia'))
// app.use(express.static('static/cwiczenia/lekcja2'))

app.get('/formsSix', (req, res) => {
    const products = [
        {name: "Myszka", checked: "tak"},
        {name: "Laptop", checked: "nie"}
    ]
        const paymentOptions = [
        {name: "blik", icon: "blik.png"},
        {name: "paypal", icon: "paypal.png"}
    ]
        const deliveryOptions = [
        {name: "InPost", icon: "inpost.png"},
        {name: "dpd", icon: "dpd.png"}
    ]


        // Object.assign({products: products, deliveryOptions: deliveryOptions, paymentOptions: paymentOptions});
    res.json({products: products, deliveryOptions: deliveryOptions, paymentOptions: paymentOptions})
})