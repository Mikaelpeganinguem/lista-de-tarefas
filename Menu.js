const prompt = require('prompt-sync')();
const { criarTarefa, listarTarefas, atualizaStatus, deletaTarefa } = require('./util');

class Menu {
    static async criaMenu() {

        let escolha = 0;
        while (escolha !== 5) {
            console.log(`
    ${"-".repeat(50)}
      1️⃣  ➡️  Adicionar tarefa
      2️⃣  ➡️  Listar tarefas
      3️⃣  ➡️  Excluir tarefa
      4️⃣  ➡️  Atualizar status
      5️⃣  ➡️  Encerrar
    ${"-".repeat(50)}
        `);

            escolha = parseInt(prompt(" -> Escolha uma das opções acima: "));
            await this.projeto(escolha);
        }
    }

    static async projeto(opcao) {
        switch (opcao) {
            case 1:
                console.log("\nIniciando a criação de uma nova tarefa...");
                await this.criarTarefa();
                break;
            case 2:
                await this.listarTarefas();
                break;
            case 3:
                await this.deletaTarefa();
                break;
            case 4:
                await this.atualizaStatus();
                break;
            case 5:
                console.log("Programa finalizado!\n Feito por: Mikael Carlos");
                break;
            default:
                console.log("Opcção não encontrada!");
                break;
        }
    }

    static async criarTarefa(){
        let resposta = await criarTarefa();
        console.log(resposta);
    }

    static async listarTarefas(){
        let resposta = await listarTarefas();
        console.log(resposta);
    }

    static async atualizaStatus(){
        let resposta = await atualizaStatus();
        console.log(resposta);
    }

    static async deletaTarefa(){
        let resposta = await deletaTarefa();
        console.log(resposta);
    }

}

module.exports = Menu;