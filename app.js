const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const { engine } = require("express-handlebars")
const produto = require("./models/Produtos.js")


//config handle
app.engine("handlebars", engine({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

//config body
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.get("/form", function (req, res) {
    res.render("form")
})

app.post("/enviado", function (req, res) {
    produto.create({
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send("awwdawd")
})

app.listen(8081)