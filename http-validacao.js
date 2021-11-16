/*

function geraArrayDeURLs(arrayLinks){
    //loop para cada objeto { chave : valor }
    //objeto -> [valor]
    //object.values(objeto)
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join())
}

function validaURLs(arrayLinks){
    return geraArrayDeURLs(arrayLinks);
}

module.exports = validaURLs;


*/
//----------------------------------------------------------------------------------------------------------------------------------------------
//MONTANDO OBJETO
/////////////////
// FETCH API - NO NODE TEMOS QUE INSTALAR USANDO O COMANDO = NPM INSTALL FETCH
/*
//const fetch = require('node-fetch');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function manejaErros(erros){
    throw new Error(erro.message)
}

async function checaStatus(arrayURLs){
    try { const arrayStatus = await Promise
        .all(arrayURLs
            .map(async url => {
            const res = await fetch(url)
            //return res.status; // Como não são todos que entendem o codigo numerico de status, podemos incluir o status em texto
            return `${res.status} - ${res.statusText}`        // que escreve o que o status significa.
        }))
       return arrayStatus;
    } catch(erro) {
        manejaErros(erro)
    }
}

function geraArrayDeURLs(arrayLinks){
    //loop para cada objeto { chave : valor }
    //objeto -> [valor]
    //object.values(objeto)
    return arrayLinks.
        map(objetoLink => Object.
            values(objetoLink).join())
}

async function validaURLs(arrayLinks){
    const links =  geraArrayDeURLs(arrayLinks);
    const statusLinks = await checaStatus(links);
    const resultados = arrayLinks.map((objeto, indice) => ({
        ...objeto,
        status:statusLinks[indice] 
    }))
    return resultados
}

module.exports = validaURLs;


*/

//----------------------------------------------------------------------------------------------------------------------------------------------
// TESTES - JEST


//const fetch = require('node-fetch');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function manejaErros(erros){
    throw new Error(erro.message)
}

async function checaStatus(arrayURLs){
    try { const arrayStatus = await Promise
        .all(arrayURLs
            .map(async url => {
            const res = await fetch(url)
            //return res.status; // Como não são todos que entendem o codigo numerico de status, podemos incluir o status em texto
            return `${res.status} - ${res.statusText}`        // que escreve o que o status significa.
        }))
       return arrayStatus;
    } catch(erro) {
        manejaErros(erro)
    }
}

function geraArrayDeURLs(arrayLinks){
    //loop para cada objeto { chave : valor }
    //objeto -> [valor]
    //object.values(objeto)
    return arrayLinks.
        map(objetoLink => Object.
            values(objetoLink).join())
}

async function validaURLs(arrayLinks){
    const links =  geraArrayDeURLs(arrayLinks);
    const statusLinks = await checaStatus(links);
    const resultados = arrayLinks.map((objeto, indice) => ({
        ...objeto,
        status:statusLinks[indice] 
    }))
    return resultados
}

module.exports = validaURLs;