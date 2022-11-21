<img src='https://ik.imagekit.io/b5di91ako/project-logo_1_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669036120104' alt='Banner'/>





### Tópicos
- [RD95 Movies](#rd95-movies)
      - [Status:](#status)
    - [Descrição do Projeto:](#descrição-do-projeto)
    - [Funcionalidades:](#funcionalidades)
    - [Acesso ao Projeto:](#acesso-ao-projeto)
    - [Tecnologias utilizadas:](#tecnologias-utilizadas)

# RD95 Movies


#### Status:
![Badge](https://img.shields.io/static/v1?label=Desafio&message=Conclu%C3%ADdo&color=%3CCOLOR%3E)

![Badge](https://img.shields.io/static/v1?label=Projeto&message=Desenvolvimento&color=yellow)

### Descrição do Projeto:

**Catálogo de filmes onde é possível buscar filmes,animes e afins em outras APIs e salvar no próprio banco de dados.**



### Funcionalidades:

#### Front-end(Client):
* Buscar filmes em outra api e salvar no próprio banco de dados.
* Caso os filmes ainda não existissem no banco é mostrado um toast informando que foi salvo. E caso os filmes existam é mostrado um toast condizente.
* Paginação de acordo com o limite de filmes escolhido na hora da busca. Por padrão é 10. 
* Busca por título
* Uso do [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) do NextJs evitando consultas repetidas e "desnecessárias" no banco de dados.

#### Back-end(Server):

* Salvar dados externos no banco de dados(nesse caso, filmes)
* Busca no banco por filtros (nesse caso, por título)
* Busca com limite, retornando quantidade de páginas e página atual
* Middlewares para tratamento de erros. Validações com Joi.

### Acesso ao Projeto:

[🔗 RD95 Movies](https://rd95-movies-client.vercel.app/)


### Como executar

* Clone o projeto: ``` git clone https://github.com/RafaDev95/RD95-Movies.git ```

* Entra na pasta *server* e use comando ```yarn``` para baixar as dependências necessárias.
* Repita o processo na pasta *client*
* Comando para iniciar tanto client quanto server: ```yarn dev```

### Tecnologias utilizadas:

#### Front-end(client):
* [NextJS](https://nextjs.org/)
* [TailwindCss](https://tailwindcss.com/)
* [Redux ToolKit](https://redux-toolkit.js.org/usage/usage-with-typescript)
* [React Hot Toast](https://react-hot-toast.com/)
* [Axios](https://axios-http.com/ptbr/docs/intro)
* [HeroIcons](https://heroicons.com/)
* [TypeScript](https://www.typescriptlang.org/)

#### Back-end(Server):
* [NodeJs](https://nodejs.org/en/)
* [Mongoose](https://mongoosejs.com/)
* [Express](https://expressjs.com/pt-br/)
* [MongoDB](https://www.mongodb.com/)
* [Joi](https://joi.dev/)
* [Cors](https://www.npmjs.com/package/cors)
* [Tsc-Watch](https://www.npmjs.com/package/tsc-watch)
* [DotEnv](https://www.npmjs.com/package/dotenv)
* [TypeScript](https://www.typescriptlang.org/)