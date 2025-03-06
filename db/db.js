const { Sequelize } = require('sequelize');

const db = new Sequelize('tarefas', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
});

async function conectBDD() {
    try {
        await db.authenticate();
        console.log("Conexão bem sucedida!");
    } catch (e) {
        console.log("Falaha na conexão com o Banco de Dados");
        console.error(e.message);
        closeConection();
    }
}

async function closeConection() {
    try {
        await db.close();
        console.log("Conexão com o Banco de Dados fechada com sucesso!");
    } catch (e) {
        console.log("Falha ao fechar a conexão com o Banco de Dados");
        console.error(e.message);
    }
}


module.exports = { db, conectBDD };