import "./cardAluno.css"

function CardAluno(){

    const nomeAluno = "Diego A. Sampaio"
    const curso = "TDS03"
    const textoAluno = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem."
    const status = "Aprovado"

    return(
        <div className="card-aluno">
            <h2>{nomeAluno}</h2>
            <h3>Curso: {curso}</h3>
            <p>{textoAluno}</p>
            <p>Status:{status} </p>
        </div>
    )
}

export default CardAluno