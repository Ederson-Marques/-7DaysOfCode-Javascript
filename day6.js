let frutas = [];
let laticínios = [];
let congelados = [];
let doces = [];
let comida = '';
let categoria = '';
let pergunta = "sim";
let adicionarOuRemover = '';
let remover = '';


while(pergunta != "não"){
    pergunta = prompt("Você deseja adicionar ou remover uma comida na sua lista ? sim ou não? ");
    while(pergunta != "sim" && pergunta != "não"){
        alert('Comando invalido');
        pergunta = prompt("Você deseja adicionar ou remover uma comida na sua lista? sim ou não? ");
    }
    if (pergunta == 'não'){
        break;
    }
    adicionarOuRemover = prompt("Escolha a opção 'adicionar' ou 'remover'?");
    if(adicionarOuRemover == 'adicionar'){
        comida = prompt("Qual comida você desaja adicionar?");
        categoria = prompt("Em qual categoria essa comida se encaixa: frutas, laticínios, doces ou congelados?");
        if(categoria == "frutas"){
            frutas.push(comida);
        }else if (categoria == "laticínios"){
            laticínios.push(comida);
        }else if (categoria == "congelados"){
            congelados.push(comida);
        }else if (categoria == "doces"){
            doces.push(comida);
        }               
    }if(adicionarOuRemover == 'remover'){
        if(frutas.length === 0 && laticínios.length === 0 && doces.length === 0 && congelados.length === 0){  
            alert(`A lista está vazia!`);
        }console.log(`Lista de compras: \nFrutas: ${frutas} \nLaticinios: ${laticínios} \nCongelados: ${congelados} \nDoces: ${doces}`);
        remover = prompt('Quais item você quer remover?');
        categoria = prompt("Em qual categoria essa comida esta: frutas, laticínios, doces ou congelados?");
        if(categoria == "frutas"){
            frutas.splice(remover);
            alert(`O item ${remover} foi removido com sucesso!`)
        }else if (categoria == "laticínios"){
            laticínios.splice(remover);
            alert(`O item ${remover} foi removido com sucesso!`)
        }else if (categoria == "congelados"){
            congelados.splice(remover);
            alert(`O item ${remover} foi removido com sucesso!`)
        }else if (categoria == "doces"){
            doces.splice(remover);
           alert(`O item ${remover} foi removido com sucesso!`)
        }
        console.log(`Lista de compras: \nFrutas: ${frutas} \nLaticinios: ${laticínios} \nCongelados: ${congelados} \nDoces: ${doces}`)
    }
}
console.log(`Lista de compras: \nFrutas: ${frutas} \nLaticinios: ${laticínios} \nCongelados: ${congelados} \nDoces: ${doces}`)