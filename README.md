## Quiz

Projeto desenvolvido com React e Next durante a imersão da Alura! 

Quiz da série How I Met Your Mother, [veja aqui o resultado](https://imersao-react-alura.malufell.vercel.app/)!

- Usuário informa o nome, passa pela tela de loading e visualiza a primeira pergunta;
- Ao selecionar uma das opções e confirmar o envio da resposta, recebe um retorno visual se acertou ou errou, passando para a próxima questão;
- Ao final das perguntas o usuário visualiza na tela de resultados quantas questões acertou.
- Na tela inicial, há a possibilidade de escolher outro quiz na lista dos "quizes da galera". Com a funcionalidade de api do Next.js os outros "quizes" irão carregar na minha própria URL e sem refresh entre as páginas :heart:

![image](https://user-images.githubusercontent.com/62160705/106399157-c6e58500-63f5-11eb-93bc-c4814f8aea2c.png)

## Tecnologias utilizadas 

- [React](https://pt-br.reactjs.org/): biblioteca JavaScript para criar interfaces de usuário.
- [Next.js](https://nextjs.org/): framework React com foco em produção e eficiência, fornece uma estrutura completa para o start de um projeto.
- [Styled-components](https://styled-components.com/): dentre diversos recursos, permite a escrita de CSS em JavaScript usando template string.
- [Prop-types](https://www.npmjs.com/package/prop-types): utilizado para tipagem de dados na aplicação React.
- [Framer Motion](https://www.framer.com/motion/): biblioteca utilizada para criar animações de entrada nos componentes. 
- [Lottie](https://lottiefiles.com/): fornece animações no formato JSON, utilizado para inclusão do efeito de loading.

Deploy realizado (de forma muito rápida e simples!) na plataforma [Vercel](https://vercel.com/docs).

## Um pouquinho 

- Criação de componentes complexos com styled-components;
- Uso de props com os componentes;
- Captura de eventos em formulários;
- Gerenciamento do state de componentes com hooks;
- Uso do next/router para implementação de rotas;
- Tipagem de dados das propriedades;
- Ciclo de vida dos componentes do React e useEffects();
- Métodos de otimização por SSR para criação de páginas dinâmicas;
- Fetch API para buscar dados de outros quizes e exibir na minha aplicação;
- Uso do Next.js para fazer a navegação no formato SPA (sem refresh na página);

## Como executar o projeto

A instalação do [node.js](https://nodejs.org/en/) é necessária para rodar a aplicação :blush:

```
# Clone este repositório
$ git clone https://github.com/malufell/imersao-react-alura.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd imersao-react-alura

# Instale as dependências
$ npm install
# ou
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# ou
$ yarn dev

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```


