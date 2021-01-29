import next from 'next';
import db from '../../db.json';

export default function dbHandler(request, response) {
  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  //essa config serve para que seja possível compartilhar meus dados publicamente para que outros apps possam fazer uma requisição pros meus dados
  //são os cabeçalhos passados para o browser que informam a permissão para a requisição sair da URL atual e acessar outras com outros métodos
  response.setHeader('Access-Control-Allow-Credentials', true);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');

  response.json(db);
}

// isso é uma feature do next (é a criação de um lambda)
    //ele cria automaticamente um servidor (sem uso do express, por exemplo)
    //ao criar uma pasta "api" em pages, com um arquivo .js, estou criando um endpoint 
        //posso passar header pra minha requisição por aqui, por exemplo