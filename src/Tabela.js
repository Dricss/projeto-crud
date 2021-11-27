// Componente
function Tabela({vetor}){

    // Retornar
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Cidade</th>
                    <th>Selecionar</th>
                </tr>
            </thead>

            <tbody>
                {
                    vetor.map((obj, indice) => (
                        <tr key={indice}>
                            <td>{indice+1}</td>
                            <td>{obj.nome}</td>
                            <td>{obj.idade}</td>
                            <td>{obj.cidade}</td>
                            <td><button className='btn btn-sucess'>Selecionar</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

// Exportar
export default Tabela;