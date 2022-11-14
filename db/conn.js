const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('bcc', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
})

try { 
    sequelize.authenticate()
    console.log('Conectamos com sucesso ;)')
} catch(err) {
    console.log(`Falha ao conectar: ${err}`)
}

module.exports = sequelize