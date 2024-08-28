const {Sequelize, sequelize} = require("./bd.js")

const Produto = sequelize.define("Produtos",{
    nome: {
        type: Sequelize.STRING
    },
    preco:{
        type: Sequelize.STRING
    }
}, {
    tableName: "Produtos",
    timestamps: false
})
module.exports = Produto
