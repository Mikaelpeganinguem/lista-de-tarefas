## Lista de Tarfeas

Este é um projeto simples de lista de tarefas utilizando **Node js**, **MySQL** e **Sequelize**. O sistema permite criar, editar status, excluir e listar todas as suas tarefas já criadas.


### Tecnologias utilizadas:

- Node.js
- Sequelize (ORM para NodeJS)
- MySQL (Banco de dados)
- Prompt-sync (Entrada de dados)

### Funcionalidades:

- Criar tarefa
- Listar tarefas
- Excluir tarefa
- Editar status de uma tarefa

### Configure o projeto

1. **Clone o reporsitório**
    ```bash
    git clone https://github.com/Mikaelpeganinguem/lista-de-tarefas

2. **Instale as depenências do projeto**
    ```bash
    npm i

3. **Configure o banco de dados**
Edite o arquivo **db.js** para corresponder ás configuração do seu banco de dados
    ```bash
    const Sequelize = require('sequelize');
    const db = new Sequelize('tarefas', 'root', '', {
        dialect: 'mysql',
        host: 'localhost'
    });

    module.exports = db;

4. **Execute o projeto**
    ```bash
    npm start



Estou aberto á contibuições e ideias de melhorias para esse projeto pessoal. Com o tempo irei melhora-lo e deixa-lo mais organizado. Existem BUGS atualmente no código, mas com o tempo eles somem.

### Autor

- Mikael Carlos Ribeiro de França

### Contatos:

- Email: carlosmikael273@gmail.com
- Linkedin: [Mikael Carlos](https://www.linkedin.com/in/mikael-carlos-0950612bb/)
- GitHub: [Mikaelpeganinguem](https://github.com/MIkaelpeganinguem)