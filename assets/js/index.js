let alunosMaiores = []
let alunosMenores = []

function cadastroDoAluno(nome, idade) {
    const maiordeIdade = idade >= 18
    const menordeIdade = idade < 18

    const resposta = maiordeIdade ? "é maior de idade" : "é menor de idade"

    const aluno = {
        nome: nome,
        idade: idade,
        maiordeIdade: maiordeIdade,
        menordeIdade: menordeIdade,
        resposta: resposta
    }

    if (aluno.maiordeIdade) {
        alunosMaiores.push(aluno)
    }

    if(aluno.menordeIdade) {
        alunosMenores.push(aluno)
    }
}

//Parte Antiga só funciona no console

function listarAlunosMaiores() {
        alunosMaiores.forEach(aluno => console.log(`O aluno de Nome ${aluno.nome} com a Idade de ${aluno.idade} anos, ${aluno.resposta}`))
}

function listarAlunosMenores() {
        alunosMenores.forEach(aluno => console.log(`O aluno de Nome ${aluno.nome} com a Idade de ${aluno.idade} anos, ${aluno.resposta}`))
}

function listarTodosAlunos() {
    console.log("Alunos Maiores de Idade:")
    console.log()
    listarAlunosMaiores()
    console.log()
    console.log("Alunos Menores de Idade:")
    console.log()
    listarAlunosMenores()
    console.log()
}


cadastroDoAluno("Ian", 19)
cadastroDoAluno("Henrique", 15)
cadastroDoAluno("Gabriel", 21)
cadastroDoAluno("Lucas", 16)
cadastroDoAluno("Rafael", 20)
cadastroDoAluno("João", 18)
cadastroDoAluno("Pedro", 22)
cadastroDoAluno("Maria", 14)
cadastroDoAluno("Julia", 23)
cadastroDoAluno("Joana", 13)


//listarTodosAlunos()

//console.log(alunosMenores)
//console.log(alunosMaiores)



//Parte Nova com HTML e CSS

const nomeHTML = document.getElementById("Nome")
const idadeHTML = document.getElementById("Idade")

const resultadoHTML = document.getElementById("resultado")
const formularioHTML = document.getElementById("formulario")


function listarAlunos() {
    let lista = "<h1>Alunos Maiores de Idade:</h1>"
    alunosMaiores.forEach(aluno => {
        lista += `<p>O aluno de Nome ${aluno.nome} com a Idade de ${aluno.idade} anos, ${aluno.resposta}</p>`
    })

    lista += "<h1>Alunos Menores de Idade:</h1>"
    alunosMenores.forEach(aluno => {
        lista += `<p>O aluno de Nome ${aluno.nome} com a Idade de ${aluno.idade} anos, ${aluno.resposta}</p>`
    })

    resultadoHTML.innerHTML = lista
}

formularioHTML.addEventListener("submit", function(event) {
    event.preventDefault()
    const nome = nomeHTML.value
    const idade = parseInt(idadeHTML.value)

    cadastroDoAluno(nome, idade)
    listarAlunos()

    nomeHTML.value = ""
    idadeHTML.value = ""
});

