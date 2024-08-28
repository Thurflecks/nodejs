const express = require("express")
const app = express()
const {Sequelize} = require("sequelize")
const bodyparser = require("body-parser")
const { engine } = require("express-handlebars")

//bd config
    const sequelize = new Sequelize("test", "root", "", {
        host: "localhost",
        dialect: "mysql"
    })

    sequelize.authenticate().then(()=>{
        console.log("ok")
    }).catch((erro)=>{
        console.log("deu erro fdp " + erro)
    })

app.get("/", function(req, res){
    res.send("ola")
})



app.listen(8081)