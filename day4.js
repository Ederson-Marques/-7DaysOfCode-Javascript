var numeroSecreto = Math.floor(Math.random()*11);
var numeroTentativa = 0



for(let contador = 0; contador < 3 ; contador++  ) {
    var chute = prompt("Descubra o numero secreto de 0 a 10")
    if(numeroSecreto == chute){
        console.log(`Parabens você acertou! O numero secreto é ${numeroSecreto}`);
        break;
    }
    else if(numeroSecreto != chute){
        numeroTentativa++
        console.log("Errou tente novamente")
    }
    if(numeroTentativa == 3){
        console.log(`Você perdeu o numero secreto é : ${numeroSecreto}`)
    }
}
 
