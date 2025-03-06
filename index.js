const { db, conectBDD } = require('./db/db');
const Menu = require('./Menu');

(async () => {

    conectBDD();
    const Tarefa = require('./db/model/tarefa');
    await db.sync().then(() => console.log("Tabela criada com sucesso!"));
    console.log(await Menu.criaMenu());

})();

