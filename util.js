const Tarefa = require('./db/model/tarefa');
const prompt = require('prompt-sync')();

class Util {

    static async criarTarefa() {
        let titulo = prompt("Nome da tarefa: ");
        let status = prompt("Digite os status da tarefa\n (concluida/pendente): ");

        if (!['concluida', 'pendente'].includes(status)) {
            return "Status inválido. Use 'concluida' ou 'pendente'.";
        }

        try {

            const novaTarefa = await Tarefa.create({
                titulo: titulo,
                status: status
            });
            return "Tarefa cadastrada com sucesso!"

        } catch (e) {
            console.error(e.message);
            return "Falha na criação da Tarefa";
        }
    }

    static async listarTarefas() {
        const tarefas = await Tarefa.findAll();

        if (tarefas.length === 0) {
            return "Nenhuma tarefa cadastrada no momento";
        }

        tarefas.forEach(tarefa => {
            console.log(`ID: ${tarefa.id} | Titulo: ${tarefa.titulo} | Status: ${tarefa.status}`);
        });
    }

    static async atualizaStatus() {
        let idTarefa = prompt("Digite o id da tarefa: ");
        let attStatus = prompt("Quais os status atuais da tarefa? ");


        if (!['concluida', 'pendente'].includes(attStatus)) {
            return "Status inválido. Use 'concluida' ou 'pendente'.";
        }

        try {

            const tarefa = await Tarefa.findByPk(idTarefa);
            if (!tarefa) {
                return "tarefa não encontrada";
            }
            tarefa.status = attStatus;
            await tarefa.save()
            return "Tarefa atualizada"

        } catch (e) {
            console.error(e.message);
            return "Falha na atualização dos status da tarefa";
        }
    }

    static async deletaTarefa() {
        let idTarefa = prompt("Digite o id da tarefa: ");

        try {

            const tarefa = Tarefa.findByPk(idTarefa);
            if (!tarefa) {
                return "Tarefa não encontrada";
            }
            await Tarefa.destroy({
                where: {
                    id: idTarefa
                }
            });
            return "Tarefa apagada com sucesso!"

        } catch (e) {
            console.error(e.message);
            return "Falha na exclusão da tarefa"
        }
    }
}

module.exports = Util;