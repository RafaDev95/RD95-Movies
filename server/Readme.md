### Documentação/Guia

A estrutura/arquitetura é a que uso normalmente, bem similar a MVC.

Sempre gosto de organizar tudo dentro da pasta **src**

* **config**:
Onde configurações essênciais para o funcionamento correto da aplicação. Nesse caso está apenas o module-alias.

* **models**: 
Onde fica todos os schemas do mongoose

* **controllers**:
Uma pasta *core* responsável pelo recebimento e envio de dados para o usuário, passar esses dados recebidos para validação, criação do schema que será validado e toda lógica de interação com o banco de dados.
A princípio pode parecer que tem muita coisa sendo feita e de fato tem. 
Porém é bem separado em seus devidos arquivos:
  - **document-controller**: Responsável pela implementação do **document-service**. Recebendo e enviando dados para o usuário, também aciona o middleware para validação dos dados recebidos e criação da *rota*
  -  **document-service**: Responsável por toda lógica de integração com o banco de dados
  -  **document-validation** Onde fica o schema de validação, nesse caso é o Joi.


* **main**:
  - **App**: Onde fica toda inicialização dos middlewares/rotas, configurações de pacotes externos e função para conectar com bando de dados.
  - **Index** Onde recebemos os controllers e inicializamos de fato, o App junto da conexão com o banco de dados.

* **midlleware**:

  - Onde são criados os middlewares, nesse caso temos um pra error e um para validação de dados com Joi.

* **utils**:
  
  - **exceptions**: Criado um Http Exception deixando melhor de fazer os tratamentos
  - **interfaces**: Onde ficam as interfaces e types.
