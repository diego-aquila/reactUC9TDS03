import CardAluno from "../CardAluno/CardAluno"
import "./homePage.css"

function HomePage() {

    const nomeCurso = "Técnico em Desenvolvimento de Sistemas"
    const ano = new Date().getFullYear()

    return(
        <>
            <header>
                <h1>Senac - {nomeCurso}</h1>
                <h2>Ano: {ano}</h2>
            </header>
            <CardAluno />
            <CardAluno />
            <CardAluno />
            <CardAluno />
            <CardAluno />
            
        </>
    )
}

export default HomePage