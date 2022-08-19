const numero = Math.floor(Math.random() * (10 - 1 + 1) + 1)
let tentativas = 0
while (tentativas <= 3) {

    let resposta = prompt("Em qual numero estou pensando?")


    if (resposta == numero) {
        alert("Parabens,você acertou o numero era: " + numero + ".");
        break;
    }

    else if (tentativas == 3) {
        alert("Suas chances acabaram, o numero era " + numero)
    }
    
    else{
        alert("Você errou!!!")
    }

    tentativas++
}
