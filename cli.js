/*
const chalk = require('chalk');
const pegaArquivo = require('./3NodeJS');

const caminho = process.argv;

function processaTexto(caminhoDeArquivo){
    const resultado = pegaArquivo(caminhoDeArquivo[2]);
    console.log(chalk.yellow('lista de links'), resultado);
}

processaTexto(caminho)
*/
//----------------------------------------------------------------------------------------------------------------------------------------------
// O primeiro deu erro, pois o console.log nao estava esperando o resultado ler as respostas, entao ele nao mostrava, no comando abaixo vamos usar o async await para ver se da certo.
/*
const chalk = require('chalk');
const pegaArquivo = require('./3NodeJS');

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo){
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);
    console.log(chalk.yellow('lista de links'), resultado);
}

processaTexto(caminho)
*/
//----------------------------------------------------------------------------------------------------------------------------------------------
//VALIDANDO LINKS
// AQUI ABRIMOS O ARQUIVO HTTP-VALIDACAO.JS

////////////////////////////////////////////

/*
const chalk = require('chalk');
const pegaArquivo = require('./3NodeJS');
const validaURLs = require('./http-validacao')

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo){
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);
    if (caminho[3] === 'validar'){
        console.log(chalk.yellow('links validados'), validaURLs(resultado));
    }else{
        console.log(chalk.yellow('lista de links'), resultado);
    }
}

processaTexto(caminho)
*/

//----------------------------------------------------------------------------------------------------------------------------------------------
//MONTANDO OBJETO
/////////////////
// FETCH API - NO NODE TEMOS QUE INSTALAR USANDO O COMANDO = NPM INSTALL FETCH

/*
const chalk = require('chalk');
const pegaArquivo = require('./3NodeJS');
const validaURLs = require('./http-validacao')

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo){
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);
    if (caminho[3] === 'validar'){
        console.log(chalk.yellow('links validados'), await validaURLs(resultado));
    }else{
        console.log(chalk.yellow('lista de links'), resultado);
    }
}

processaTexto(caminho)

*/
//----------------------------------------------------------------------------------------------------------------------------------------------
// TESTES JEST

const chalk = require('chalk');
const pegaArquivo = require('./3NodeJS');
const validaURLs = require('./http-validacao')

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo){
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);
    if (caminho[3] === 'validar'){
        console.log(chalk.yellow('links validados'), await validaURLs(resultado));
    }else{
        console.log(chalk.yellow('lista de links'), resultado);
    }
}

processaTexto(caminho)
