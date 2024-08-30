const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const { engine } = require("express-handlebars")
const produto = require("./models/Produtos.js")
const path = require("path")



//config handlebars
    app.engine("handlebars", engine({ defaultLayout: "main", runtimeOptions: {
        allowProtoPropertiesByDefault: true,
    }}))
    app.set("view engine", "handlebars")

//config arquivos estaticos para pasta public
    app.use(express.static(path.join(__dirname, "public")))
//config body-parser
    app.use(bodyparser.urlencoded({extended:false}))
    app.use(bodyparser.json())

//config rotas
    app.get("/form", function (req, res) {
        res.render("form")
    })
    //add dados no bd
    app.post("/enviado", function (req, res) {
        produto.create({
            nome: req.body.nome,
            preco: req.body.preco
        })

        res.redirect("dados")
    })
    //mostrando dados do bd
    app.get("/dados", function (req, res){
        produto.findAll().then(function(item){
            res.render("dados", {item: item})
        })

    })

    //att valores
    app.get("/up/:id", function (req, res) {
        produto.findByPk(req.params.id).then(function(produto) {
            res.render("up", { item: produto });
        });
    });
    
    //att valores
    app.post("/ok/:id", function (req, res) {
        const id = req.params.id;
        produto.update({
            nome: req.body.nome,
            preco: req.body.preco
        }, { where: { id: id }})
        res.redirect("/dados")
    });
    //deletando valores no bd
    app.get("/delete/:id", function(req, res){
        id = req.params.id
        produto.destroy({where: {id: id}})
        res.redirect("/dados")
    })
    

app.listen(8081)