const { db, conectBDD } = require('./db/db');
const Menu = require('./Menu');


(async () => {

    await db.sync();
    const Tarefa = require('./db/model/tarefa');
    conectBDD();
    console.log(Menu.criaMenu());

})();

