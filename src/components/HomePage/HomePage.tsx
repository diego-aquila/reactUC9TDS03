import CardAluno from "../CardAluno/CardAluno"
import Rodape from "../Rodape/Rodape"
import "./homePage.css"

interface Aluno {
    id: number
    nome: string
    curso: string
    descricao: string
    status: boolean
}

const alunos: Aluno[] = [

    {id: 1, nome: "Diego Áquila" , curso:"TDS03", descricao:"Aluno inteligente", status: true},
    {id: 2, nome: "Heitor Áquila" , curso:"TDS03", descricao:"Melhor Aluno do mundo, meu fav", status: true},
    {id: 3, nome: "Benjamin Dominique" , curso:"TDS03", descricao:"Aluno soda", status: false},
    {id: 4, nome: "Raí Capinam" , curso:"TDS03", descricao:"joga muito no São Paulo", status: true}


]

function HomePage() {

    const nomeCurso = "Técnico em Desenvolvimento de Sistemas"
    const ano = new Date().getFullYear()

    return(
        <>
            <header>
                <h1>Senac - {nomeCurso}</h1>
                <h2>Ano: {ano}</h2>
            </header>

            <div className="container-cards">

            {  

            alunos.map((aluno) => (
                <CardAluno
                    key = {aluno.id}
                    nomeAluno={aluno.nome}
                    curso = {aluno.curso}
                    textoAluno={aluno.descricao}  
                    status={aluno.status}

                />
            ))


            }

            </div>


            
            
            <Rodape />
            
        </>
    )
}

export default HomePage