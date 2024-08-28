const {Sequelize} = require("sequelize")
const sequelize = new Sequelize("teste", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(()=>{
    console.log("ok")
}).catch((erro)=>{
    console.log("deu erro fdp " + erro)
})
module.exports = {Sequelize, sequelize}
