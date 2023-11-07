let nomeHeroi = "Super Man"
let nivelPoder = 8997
let xp = nivelPoder

if (xp < 1000) {
    let classificacao = "Ferro"
    console.log("O Herói de nome '" + nomeHeroi + "' está no nível de '" + classificacao + "' ("+xp+"xp)")
} else if (xp >= 1001 && xp <= 2000){
    let classificacao = "Bronze"
    console.log("O Herói de nome '" + nomeHeroi + "' está no nível de '" + classificacao + "' ("+xp+"xp)")
} else if (xp >= 2001 && xp <= 5000){
    let classificacao = "Prata"
    console.log("O Herói de nome '" + nomeHeroi + "' está no nível de '" + classificacao + "' ("+xp+"xp)")
} else if (xp >= 6001 && xp <= 7000){
    let classificacao = "Ouro"
    console.log("O Herói de nome '" + nomeHeroi + "' está no nível de '" + classificacao + "' ("+xp+"xp)")
} else if (xp >= 7001 && xp <= 8000){
    let classificacao = "Diamante"
    console.log("O Herói de nome '" + nomeHeroi + "' está no nível de '" + classificacao + "' ("+xp+"xp)")
} else if (xp >= 8001 && xp <= 9000){
    let classificacao = "Ascendente"
    console.log("O Herói de nome '" + nomeHeroi + "' está no nível de '" + classificacao + "' ("+xp+"xp)")
} else if (xp >= 9001 && xp <= 10000){
    let classificacao = "Imortal"
    console.log("O Herói de nome '" + nomeHeroi + "' está no nível de '" + classificacao + "' ("+xp+"xp)")
} else {
    let classificacao = "Radiante"
    console.log("O Herói de nome '" + nomeHeroi + "' está no nível de '" + classificacao + "' ("+xp+"xp)")
}