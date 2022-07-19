function calcularMedia() {
    let inNome = document.getElementById('inNome')
    let inNota1 = document.getElementById('inNota1')
    let inNota2 = document.getElementById('inNota2')
    let outMedia = document.getElementById('outMedia')
    let outSituacao = document.getElementById('outSituacao')

    let nome = inNome.value
    let nota1 = Number(inNota1.value)
    let nota2 = Number(inNota2.value)


    let media = (nota1 + nota2) / 2

    outMedia.innerHTML = `Média das Notas: ${media.toFixed(1)}`

    if (media >= 7 ){
        outSituacao.innerHTML = `Parabéns ${nome}! Você foi Aprovado(a).`
        outSituacao.style.color = "Blue"
} else {
    outSituacao.innerHTML = `Que Pena ${nome}.Você foi Reprovado(a).`
    outSituacao.style.color = "Red"
  }
}
let btExibir = document.getElementById('btExibir')
btExibir.addEventListener('click', calcularMedia)