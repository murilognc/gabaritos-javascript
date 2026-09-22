// 09) turmaJavascript.js: Crie um array, onde cada elemento representa uma turma com as seguintes propriedades:
// - nomeProfessor: uma string contendo o nome do professor.
// - alunos: um array de objetos, onde cada objeto representa um aluno com as propriedades:
//      - nome: nome do aluno.
//      - nota: nota do aluno.
// Após criar a estrutura, crie um método que ordene os alunos de cada turma em ordem crescente de nota, 
// e outro método que imprime a mensagem de acordo com a condição:
// "Parabéns <nome_aluno> , você foi aprovado com a nota X" caso a nota seja >= 7
// "Não foi dessa vez <nome_aluno>, você reprovou com a nota X" caso a nota seja <7

const turmas = [
    {
        nomeProfessor: "Murilo Costa",
        alunos: [
            { nome: "Ana", nota: 8.5 },
            { nome: "Carlos", nota: 6.0 },
            { nome: "Maria", nota: 9.0 },
            { nome: "Pedro", nota: 5.5 }
        ]
    },
    {
        nomeProfessor: "Luiz Augusto",
        alunos: [
            { nome: "Lucas", nota: 7.5 },
            { nome: "Julia", nota: 6.5 },
            { nome: "Rafael", nota: 9.5 },
            { nome: "Fernanda", nota: 4.0 }
        ]
    }
];

function ordenarAlunos(turmas) {
    for (let turma of turmas) {
        turma.alunos.sort((a, b) => a.nota - b.nota);
    }
}

function verificarAlunos(turmas) {
    for (let turma of turmas) {
        console.log(`\nProfessor: ${turma.nomeProfessor}`);

        for (let aluno of turma.alunos) {
            if (aluno.nota >= 7) {
                console.log(
                    `Parabéns ${aluno.nome}, você foi aprovado com a nota ${aluno.nota}`
                );
            } else {
                console.log(
                    `Não foi dessa vez ${aluno.nome}, você reprovou com a nota ${aluno.nota}`
                );
            }
        }
    }
}

ordenarAlunos(turmas);
verificarAlunos(turmas);