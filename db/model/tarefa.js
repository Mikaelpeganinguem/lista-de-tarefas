const Sequelize = require('sequelize');
const {db} = require('../db');

const Tarefa = db.define('Tarefa',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: Sequelize.STRING
});

module.exports = Tarefa;