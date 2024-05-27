export default function SelectSala({salas}) {
    return(
        <select name="opsala" defaultValue="" required>
            <option value="" disabled>Selecione a Sala</option>
            {salas.map((sala, index) => {
                //Removendo acentos
                let NormaValueSala = sala.nome.normalize("NFD");
                //Adicionando underline
                let valueSala = NormaValueSala.replace(/ /g, "_");
                return(
                    <option value={valueSala} key={index}>{sala.nome} - {sala.ano}º{sala.curso}</option>
                )
            })}
        </select>   
    )
}