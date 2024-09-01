//config banco de dados
    const {Sequelize} = require("sequelize")
    const sequelize = new Sequelize("sql10728859", "sql10728859", "qdWDvIglik", {
        host: "sql10.freesqldatabase.com",
        dialect: "mysql",
        port: 3306
    })

    sequelize.authenticate().then(()=>{
        console.log("conectado ao banco de dados")
    }).catch((erro)=>{
        console.log("deu erro fdp " + erro)
    })
    module.exports = {Sequelize, sequelize}
