import InputRadio from '../layout/InputRadio';
import InputModal from '../layout/InputModal';
import '../../assets/css/ModalForm.css';
import { FaPlus as IconAdd} from 'react-icons/fa6';
import { useState } from 'react';

export default function ModalAddSala() {
    const [newAnoSala, setNewAnoSala] = useState();

    return(
        <form action="" className={"modalForm__container"}>
            <InputModal type={"text"} name={"nomeSala"} id={"nomeSala"} placeholder={"Ex: Maria Valéria Rezende"} textView={"Nome*"}/>
            <InputModal type={"text"} name={"cursoSala"} id={"cursoSala"} placeholder={"ADM, DS (apenas siglas)"} textView={"Curso (apenas siglas)*"}/>
            <div className={"modalForm__containerRadio"}>
                <h4>Ano*</h4>
                <div className={"modalForm__radioCollection"}>
                    <InputRadio name={"add_sala"} id={"primeiroAno"} value={1} textView={"1º Ano"} setValue={setNewAnoSala}/>
                    <InputRadio name={"add_sala"} id={"segundoAno"} value={2} textView={"2º Ano"} setValue={setNewAnoSala}/>
                    <InputRadio name={"add_sala"} id={"terceiroAno"} value={3} textView={"3º Ano"} setValue={setNewAnoSala}/>
                </div>
            </div>
            <InputModal type={"number"} name={"anoIngresso"} id={"anoIngresso"} placeholder={"2020, 2021..."} textView={"Ano de Ingresso*"}/>
            <div className={"btnCollection"}>
                <button type="button">
                    <span className={"btnCollection__text"}>Adicionar Sala</span> 
                    <span className={"btnCollection__icon"}><IconAdd/></span>
                </button>
            </div>
        </form>
    )
}