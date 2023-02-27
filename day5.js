let frutas = [];
let laticínios = [];
let congelados = [];
let doces = [];
let comida = '';
let categoria = '';

let pergunta = "sim";

while(pergunta != "não"){
    pergunta = prompt("Você deseja adicionar uma comida na sua lista? sim ou não? ");
    while(pergunta != "sim" && pergunta != "não"){
        alert('Comando invalido');
        pergunta = prompt("Você deseja adicionar uma comida na sua lista? sim ou não? ");
    }
    if (pergunta == 'não'){
        break;
    }

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
    }else{
        alert("comando invalido")

    }
}
console.log(`Lista de compras: \nFrutas: ${frutas} \nLaticinios: ${laticínios} \nCongelados: ${congelados} \nDoces: ${doces}`)