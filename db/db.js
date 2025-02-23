const {Sequelize} = require('sequelize');

const db = new Sequelize('tarefas', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
});

async function conectBDD() {
    try{
        await db.authenticate();
        console.log("Conexão bem sucedida!");
    }catch (e){
        console.log("Falaha na conexão com o Banco de Dados");
        console.error(e.message);
    }
}


module.exports = { db, conectBDD };