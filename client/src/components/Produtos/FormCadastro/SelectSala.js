export default function SelectSala({salas, setInfo}) {
    return(
        <select name="opsala" defaultValue="" required onChange={e => setInfo(e.target.value, "sala")}>
            <option value="" disabled>Selecione a Sala</option>
            {salas.length > 0 && salas.map((sala) => {

                return(
                    <option value={sala._id} key={sala._id}>{sala.ano_sala}º {sala.curso_sigla} - {sala.nome} </option>
                )
            })}
        </select>   
    )
}