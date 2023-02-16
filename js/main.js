'use strict'

// const adicionarCard = () => {
//     const container = document.getElementById('container')
//     container.innerHTML = container.innerHTML + '<div class="item"></div>'
// }

//STRING
//""
//''
//``

const adicionar = document.getElementById('adicionar')

const adicionarCard = (nome, nota) => {

    const container = document.getElementById('container')
    const novaDiv = document.createElement('aluno')

    if(nota >= 5){
        novaDiv.classList.add('verde')
        novaDiv.classList.remove('vermelho')
    } else {
        novaDiv.classList.remove('verde')
        novaDiv.classList.add('vermelho')
    }

    novaDiv.classList.add('aluno')
    novaDiv.innerHTML = `<h2 class="aluno_nome">${nome}</h2>
                          <span class="aluno_nota" id="aluno_nota">${nota}</span>`

    container.appendChild(novaDiv)
}

const handleClick = () => {
    const nomeAluno = document.getElementById('nome_aluno').value
    const notaAluno = Number(document.getElementById('nota_aluno').value)

    if(nomeAluno == '' || notaAluno === ''){
        alert('Preencha todos os dados!')
    } else if(isNaN(notaAluno)){
        alert('A nota precisa ser um número!')
    } else if(notaAluno < 0 || notaAluno > 10){
        alert('A nota precisa ser entre 0 e 10 apenas!')
    } else {
        adicionarCard(nomeAluno, notaAluno)
    }
}

adicionar.addEventListener('click', handleClick)