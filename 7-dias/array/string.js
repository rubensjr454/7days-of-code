let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";
let remover = "";

let adicionarMais = "sim"; 

while (adicionarMais != "não") {
    adicionarMais = prompt("você deseja adicionar uma comida a sua lista de compras? Responda 'sim' ou não'.")
    while(adicionarMais != "sim" && adicionarMais != "não" && adicionarMais != "remover"){
        alert("Operação nao reconhecidade")
        adicionarMais = prompt("você deseja adicionar uma comida a sua lista de compras? Responda 'sim' ou não'.")
    }

    if (adicionarMais == "não"){
        break;
    }

    if(adicionarMais == "sim"){
        comida= prompt("Qual comida gostaria de adicionar?")
    categoria = prompt("Em qual categoria se encaixa a sua comida? 'Frutas', 'laticinios, doces, congelados")
    switch(categoria){
        case "frutas" :
            frutas.push(comida)
            break;
        case "laticinios" :
            laticinios.push(comida)
            break;
        case "doces" :
            doces.push(comida)  
            break;
        case "congelados" :
            congelados.push(comida)  
            break;
        default :
            alert("Essa categoria não foi pré-definida.")
        }
    } else if (adicionarMais == "remover"){
        if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0){  
            alert(`A lista está vazia!`);
    } else {
        remover = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n\nQual produto você deseja remover?`);

        switch(remover){
            case frutas.indexOf(remover) != -1 :
                frutas.splice(frutas.indexOf(remover), 1)
                alert(`O item ${remover} foi removido com sucesso!`)
                break;
            case laticinios.indexOf(remover) != -1 :
                laticinios.splice(laticinios.indexOf(remover), 1)
                alert(`O item ${remover} foi removido com sucesso!`)
                break;
            case doces.indexOf(remover) != -1 :
                doces.splice(doces.indexOf(remover), 1)
                alert(`O item ${remover} foi removido com sucesso!`)
                break;
            case congelados.indexOf(remover) != -1 :
                congelados.splice(congelados.indexOf(remover), 1)
                alert(`O item ${remover} foi removido com sucesso!`)
                break;
            default :
                alert("Não foi possivel encontrar o item dentro da lista!")
            }
        }
    }
}

alert(`Lista de compras: \n Frutas: ${frutas}\n Laticinios: ${laticinios}\n Doces: ${doces}\n congelados: ${congelados} `)