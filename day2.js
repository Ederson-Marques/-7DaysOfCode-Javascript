let nome = prompt("Digite seu nome")
let idade = prompt("Digite sua idade")
let linguagem = prompt('Qual Linguagem você esta estudando?')

console.log('Ola ' + nome + ' , voce tem ' + idade + ' anos e ja está aprendendo ' + linguagem + '')

const resposta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`)

if(resposta == 1) {
    alert('Muito bom! Continue estudando e você terá muito sucesso.')
}else if(resposta == 2){
    alert('Ahh que pena... Já tentou aprender outras linguagens?')
}else{
    alert('Comando Invalido')
}

//////////////////////////////////////////////////////////////////////////////////

const nome1 = prompt('Digite seu nome:');
const idade1= prompt('Digite sua idade:');
const linguagem1 = prompt('Qual linguagem você estuda:');

const msg1 = `Ola ${nome1}, você tem ${idade1} anos e ja esta aprendendo ${linguagem1}!`;
alert(msg1);


const resposta1 = prompt(`Você gosta de estudar ${linguagem1}? Responda com o número 1 para SIM ou 2 para NÃO.`)

if(resposta1 == 1) {
    alert('Muito bom! Continue estudando e você terá muito sucesso.')
}else if(resposta1 == 2){
    alert('Ahh que pena... Já tentou aprender outras linguagens?')
}else{
    alert('Comando Invalido')
}




