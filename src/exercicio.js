const alunos = [
    {nome: 'Pedro', nota: 8.5},
    {nome: 'Ricardo', nota: 4.5},
    {nome: 'Julia', nota: 10.0},
    {nome: 'Luciane', nota: 9.5},
    {nome: 'Letícia', nota: 3.5},
    {nome: 'Maria Luisa', nota: 4.9},
]

function AlunosAprovados(listAlunos) {
    return listAlunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = AlunosAprovados(alunos);

console.log('Aprovados');
alunosAprovados.forEach(aluno => {
    console.log(`${aluno.nome}: ${aluno.nota}`);
});