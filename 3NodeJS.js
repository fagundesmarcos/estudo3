// CRIANDO UMA BIBLIOTECA 

// npm - biblioteca de codigos NodeJS
// no terminl => npm install chalk ---- ajuda a localizar textos

/*const chalk = require('chalk');

console.log(chalk.blue("Ola mundo"))

const paragrafo = "Texto retornado por uma função";

function texto(string){
    return string
}

console.log(texto(paragrafo))



*/
//----------------------------------------------------------------------------------------------------------------------------------------------
// FS ------ CARREGAMENTO DE ARQUIVO

/*
const chalk = require('chalk');
const fs = require('fs');

function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
    fs.readFile(caminhoDoArquivo, encoding, (_, texto) => { //ignoramos a primeira parte com _
        console.log(chalk.green(texto))                     //pois não vamos tratar de erro
    })                                                      // vamos tratar de erro abaixo
}

pegaArquivo('./texto1.md');
*/

//----------------------------------------------------------------------------------------------------------------------------------------------
// ##### Codigo sincrono ##### - Bate e volta de informações

/*
const chalk = require('chalk');
const fs = require('fs');

function trataErro(erro){
    throw new Error(chalk.red(erro))
}

function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => { 
        if(erro){
            trataErro(erro)
        }
        console.log(chalk.green(texto))                     
    })                                                      
}

pegaArquivo('./texto.md'); // repare que o nome do arquivo esta errado de proposito 

*/
//----------------------------------------------------------------------------------------------------------------------------------------------
// ##### Codigo Assincrono ##### o JS vai ter que esperar - WZ

/*
const chalk = require('chalk');
const fs = require('fs');

function trataErro(erro){
    throw new Error(chalk.red(erro))
}

function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
    fs.promises
    .readFile(caminhoDoArquivo, encoding)
    .then((texto) => console.log(texto))  
    .catch((erro) => trataErro(erro))
}
pegaArquivo('./texto1.md')

*/

//----------------------------------------------------------------------------------------------------------------------------------------------
// ########## async/await ##########
/*
const chalk = require('chalk');
const fs = require('fs');

function trataErro(erro){
    throw new Error(chalk.red(erro))
}

async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
    try {
      const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
      console.log(chalk.green(texto))
    } catch(erro){
      trataErro(erro)
    }
    finally{                                            // o finally vai ser executado independente da função ter dado certo ou 
        console.log(chalk.yellow("OPERAÇÃO CONCLUÍDA"))    // ter ocorrido algum erro..... logo apos a verificação das duas ele sera
    }                                                         // executado
    
}

pegaArquivo('./texto1.md')

*/

//----------------------------------------------------------------------------------------------------------------------------------------------
// ###################################    CAPTURANDO LINKS     ##################################
// EXPRESSÕES REGULARES
//são objetos que mapeiam padrões de texto por meio de uma linguagem própria, com sintaxe e regras específicas. Elas são uma ferramenta eficiente para resolver problemas de código que envolvem padrões e buscas textuais.
//Por exemplo, quando procuramos no campo de busca do computador por qualquer arquivo de extensão jpg com *.jpg. É claro que as expressões regulares podem ir de muito simples até extremamente complexas, então você não precisa se preocupar em decorar todos os meta-chars ou como eles se comportam; sempre é possível consultar sites como regex101 ou o guia do MDN.

//----------------------------------------------------------------------------------------------------------------------------------------------

// CAPTURANDO GRUPOS

/*
const chalk = require('chalk');
const fs = require('fs');

const texto = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)';

function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const linksExtraidos = texto.match(regex)
    console.log(linksExtraidos)
}

extraiLinks(texto)

function trataErro(erro){
    throw new Error(chalk.red(erro))
}

async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
    try {
      const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
      console.log(chalk.green(texto))
    } catch(erro){
      trataErro(erro)
    }
    finally{                                             
        console.log(chalk.yellow("OPERAÇÃO CONCLUÍDA"))    
    }                                                        
    
}

//pegaArquivo('./texto1.md')

*/

//----------------------------------------------------------------------------------------------------------------------------------------------
// RETORNANDO LINKS
/*
const chalk = require('chalk');
const fs = require('fs');


function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) !== null){
        arrayResultados.push( { [temp[1] ]: temp[2] } )
    }
    return arrayResultados;

}

function trataErro(erro){
    throw new Error(chalk.red(erro))
}

async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
    try {
      const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
      console.log(extraiLinks(texto));
    } catch(erro){
      trataErro(erro)
    }
    finally{                                             
        console.log(chalk.yellow("OPERAÇÃO CONCLUÍDA"))    
    }                                                        
    
}

pegaArquivo('./texto1.md')

*/

//----------------------------------------------------------------------------------------------------------------------------------------------
// EXECUTANDO COMANDOS

/*
const chalk = require('chalk');
const fs = require('fs');

function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) !== null){
        arrayResultados.push( { [temp[1] ]: temp[2] } )
    }
    return arrayResultados;
}

function trataErro(erro){
    throw new Error(chalk.red(erro))
}

async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
    try {
      const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
      console.log(extraiLinks(texto));
    } catch(erro){
      trataErro(erro)
    }
    finally{                                             
        console.log(chalk.yellow("OPERAÇÃO CONCLUÍDA"))    
    }                                                        
}

//pegaArquivo('./texto1.md')

module.exports = pegaArquivo
// nessa parte que abrimos o arquivo cli.js para interagir com o console do node.


*/
//----------------------------------------------------------------------------------------------------------------------------------------------
// ORGANIZANDO ENTRADA E SAIDA


/*

const chalk = require('chalk');
const fs = require('fs');

function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) !== null){
        arrayResultados.push( { [temp[1] ]: temp[2] } )
    }
    return arrayResultados.length ===0 ? 'NÃO HÁ LINKS' : arrayResultados;  // if ternários
}

function trataErro(erro){
    throw new Error(chalk.red(erro))
}

async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
    try {
      const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
      return extraiLinks(texto);
    } catch(erro){
      trataErro(erro)
    }
    //finally{                                             
        //console.log(chalk.yellow("OPERAÇÃO CONCLUÍDA"))    
   // }                                                        
}

module.exports = pegaArquivo

*/


//----------------------------------------------------------------------------------------------------------------------------------------------
//  VALIDANDO LINKS
// AQUI ABRIMOS O ARQUIVO HTTP-VALIDACAO.JS

////////////////////////////////////////////

/*
const chalk = require('chalk');
const fs = require('fs');

function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) !== null){
        arrayResultados.push( { [temp[1] ]: temp[2] } )
    }
    return arrayResultados.length ===0 ? 'NÃO HÁ LINKS' : arrayResultados;  // if ternários
}

function trataErro(erro){
    throw new Error(chalk.red(erro))
}

async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
    try {
      const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
      return extraiLinks(texto);
    } catch(erro){
      trataErro(erro)
    }
    //finally{                                             
        //console.log(chalk.yellow("OPERAÇÃO CONCLUÍDA"))    
   // }                                                        
}

module.exports = pegaArquivo

*/

//----------------------------------------------------------------------------------------------------------------------------------------------
//MONTANDO OBJETO
/////////////////
// FETCH API - NO NODE TEMOS QUE INSTALAR USANDO O COMANDO = NPM INSTALL FETCH
/*
const chalk = require('chalk');
const fs = require('fs');

function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) !== null){
        arrayResultados.push( { [temp[1] ]: temp[2] } )
    }
    return arrayResultados.length ===0 ? 'NÃO HÁ LINKS' : arrayResultados;  // if ternários
}

function trataErro(erro){
    throw new Error(chalk.red(erro))
}

async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
    try {
      const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
      return extraiLinks(texto);
    } catch(erro){
      trataErro(erro)
    }
    //finally{                                             
        //console.log(chalk.yellow("OPERAÇÃO CONCLUÍDA"))    
   // }                                                        
}
module.exports = pegaArquivo
*/
//----------------------------------------------------------------------------------------------------------------------------------------------
// TESTES - JEST


const chalk = require('chalk');
const fs = require('fs');

function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) !== null){
        arrayResultados.push( { [temp[1] ]: temp[2] } )
    }
    return arrayResultados.length ===0 ? 'NÃO HÁ LINKS' : arrayResultados;  // if ternários
}

function trataErro(erro){
    throw new Error(chalk.red(erro))
}

async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
    try {
      const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
      return extraiLinks(texto);
    } catch(erro){
      trataErro(erro)
    }
    //finally{                                             
        //console.log(chalk.yellow("OPERAÇÃO CONCLUÍDA"))    
   // }                                                        
}
module.exports = pegaArquivo