/*

const pegaArquivo = require('../3NodeJS');

//test('adds 1 + 2 to equal 3', () => {
//	expect(sum(1,2)).toBe(3);
//});

//test('deve ser uma função', () => {
//    expect(typeof pegaArquivo).toBe('function');
//});

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]


    describe('pegaArquivo::', () => {
        it('deve ser uma função', () => {
            expect(typeof pegaArquivo).toBe('function');
        })
        it('deve retornar array com resultados', async () => {
            const resultado = await pegaArquivo('C:\Users\Cliente\Desktop\TESTEVSC\teste\arquivos\texto1.md')
            expect(resultado).toEqual('arrayResult');
        })
        it('deve retornar mensagen "não há links"', async () => {
            const resultado = await pegaArquivo('C:\Users\Cliente\Desktop\TESTEVSC\teste\arquivos\texto1_semLinks.md');
            expect(resultado).toBe('não há link');
        })
        it('deve lançar um erro na falta de arquivo', () => {
            async function capturaErro() {
                await pegaArquivo('C:\Users\Cliente\Desktop\TESTEVSC\teste\arquivos');
                expect(capturaErro).toThrowError(/nao há arquivo no caminho/)
            }
        })
    })

*/