//config banco de dados
    const {Sequelize} = require("sequelize")
    const sequelize = new Sequelize("teste", "root", "", {
        host: "localhost",
        dialect: "mysql"
    })

    sequelize.authenticate().then(()=>{
        console.log("conectado ao banco de dados")
    }).catch((erro)=>{
        console.log("deu erro fdp " + erro)
    })
    module.exports = {Sequelize, sequelize}
