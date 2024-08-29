const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const { engine } = require("express-handlebars")
const produto = require("./models/Produtos.js")


//config handlebars
    app.engine("handlebars", engine({ defaultLayout: "main", runtimeOptions: {
        allowProtoPropertiesByDefault: true,
    }}))
    app.set("view engine", "handlebars")

//config body-parser
    app.use(bodyparser.urlencoded({extended:false}))
    app.use(bodyparser.json())

//config rotas
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

    app.get("/dados", function (req, res){
        produto.findAll().then(function(item){
            res.render("dados", {item: item})
        })

    })

app.listen(8081)