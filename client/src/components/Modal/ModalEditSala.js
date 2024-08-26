import '../../assets/css/ModalForm.css';
import '../../assets/css/InputRadioMerged.css';
import InputModal from "../layout/InputModal";
import InputRadio from '../layout/InputRadio';
import InputRadioMerged from '../layout/InputRadioMerged';
import { useState } from 'react';


export default function ModalEditSala({salaInfo, setValue}) {
    const [status, setStatus] = useState(true);

    return(
        <form action="" className="modalForm__container">
            <InputModal type={"text"} 
                        name={"nomeSala"} 
                        id={"nomeSala"}
                        value={salaInfo.nome}
                        placeholder={"Ex: Maria Valéria Rezende"} 
                        textView={"Nome da Sala"}/>
            <InputModal type={"text"} 
                        name={"cursoSala"} 
                        value={salaInfo.curso_sigla}
                        id={"cursoSala"} 
                        placeholder={"ADM ou DS (apenas siglas)"} 
                        textView={"Curso da Sala"}/>

            <div className={"modalForm__containerRadio"}>
                <h4>Ano</h4>
                <div className={"modalForm__radioCollection"}>
                    <InputRadio name={"edit_sala"} 
                                id={"primeiroAno"} 
                                value={1} 
                                checked={salaInfo.ano_sala === 1} 
                                textView={"1º Ano"}/>
                    <InputRadio name={"edit_sala"} 
                                id={"segundoAno"} 
                                value={2} 
                                checked={salaInfo.ano_sala === 2} 
                                textView={"2º Ano"}/>
                    <InputRadio name={"edit_sala"} 
                                id={"terceiroAno"} 
                                value={3} 
                                checked={salaInfo.ano_sala === 3} 
                                textView={"3º Ano"}/>
                </div>
            </div>

            <div className="modalForm__containerRadio">
                <h4>Status</h4>
                <div className={"optionCollectionMerged"}>
                    <InputRadioMerged name={"edit_status"} 
                                      id={"ativo"} 
                                      value={true} 
                                      checked={salaInfo.is_active === true} textView={"ATIVO"} 
                                      setValue={setStatus}/>
                    <InputRadioMerged name={"edit_status"} 
                                      id={"inativo"} 
                                      value={false}
                                      checked={salaInfo.is_active === false} 
                                      textView={"INATIVO"} 
                                      setValue={setStatus}/>
                </div>
            </div>

            <div className="btnCollection">
                <button type="button">
                    <span className="btnCollection_text">Confirmar Edição</span>
                </button>
            </div>
        </form>
    )
}