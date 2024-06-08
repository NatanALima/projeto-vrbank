import { useState } from "react";
import styles from '../../../assets/css/FormCadastro.module.css';
import '../../../assets/css/animation.css';
import InputRadio from "../../layout/InputRadio";
import SelectSala from './SelectSala';
import ProductBox from './ProductBox';

//Icones de formulário
import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai';
import {BsFillSendCheckFill} from 'react-icons/bs';

export default function FormCadastro() {

    const salas = [{nome: "CAROLINA DE JESUS",
                    curso: "ADM",
                    ano: 3},
                    {nome: "MARIA VALÉRIA REZENDE",
                    curso: "DS",
                    ano: 3},
                    {nome: "MARTHA MEDEIROS",
                    curso: "RH",
                    ano: 3},
                    {nome: "ARIANO SUASSUNA",
                    curso: "ADM",
                    ano: 2},
                    {nome: "MIA COUTO",
                    curso: "DS",
                    ano: 2},
                    {nome: "PEPETELA",
                    curso: "RH",
                    ano: 2},
                    {nome: "CONCEIÇÃO EVARISTO",
                    curso: "ADM",
                    ano: 1},
                    {nome: "ANA MARIA GONÇALVES",
                    curso: "DS",
                    ano: 1},
                    {nome: "MARIA FIRMINA DOS REIS",
                    curso: "RH",
                    ano: 1}
                ];

    const [numBoxProd, setnumBoxProd] = useState([0]);

    const addBoxList = () => {
        if(numBoxProd.length < 6) {
            //Pega o valor "temporário" atual do NumBox antes da renderização e incrementa um novo elemento dentro do array; 
            setnumBoxProd(prevNumBox => [...prevNumBox, numBoxProd[numBoxProd.length -1] + 1]);
        } 
    
    }

    const delBoxList = () => {
        if(numBoxProd.length > 1) {
            setnumBoxProd(prevNumBox => prevNumBox.slice(0, -1));
            
        }
    }
    return(
        <form>
            <fieldset id={styles.clientContainer}>
                <legend>Informações do Cliente</legend>
                <div className={styles.inputContainer}>
                    <input type="text" className="inputNome" required/>
                    <label>Nome do Aluno</label>
                </div>            
                <div className={styles.optionContainer}>
                    <h4 className={styles.optionTitle}>Categoria</h4>
                    <div className={styles.optionCollection}>
                        <div className={styles.optionCollection__content}>
                            <input type="radio" name="client_categ" id="aluno" value={"aluno"}/>
                            <label htmlFor="aluno">Aluno(a)</label>
                        </div>
                        <div className={styles.optionCollection__content}>
                            <input type="radio" name="client_categ" id="professor" value={"professor"}/>
                            <label htmlFor="professor">Professor(a)</label>
                        </div>
                        <div className={styles.optionCollection__content}>
                            <input type="radio" name="client_categ" id="funcionario" value={"funcionario"}/>
                            <label htmlFor="funcionario">Funcionário(a)</label>
                        </div>
                        <div className={styles.optionCollection__content}>
                            <input type="radio" name="client_categ" id="other" value={"other"}/>
                            <label htmlFor="other">Outro</label>
                        </div>
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <legend>Forma de Pagamento</legend>
                <div className={styles.optionContainer}>
                    <div className={styles.optionCollection}>
                        <InputRadio name={"tipo_pagamento"} id={"payNow"} value={"payNow"} textView={"Pagar agora"}/>
                        <InputRadio name={"tipo_pagamento"} id={"payLater"} value={"payLater"} textView={"Pagar Depois"}/>
                    </div>
                </div>
                
            </fieldset>
            <fieldset id={styles.salaContainer}>
                <legend>Informações da Sala</legend>
                <div className={styles.optionContainer}>
                    <h4 className={styles.optionTitle}>Ano</h4>
                    <div className={styles.optionCollection}>
                        <InputRadio name={"aluno_sala"} id={"primeiroAno"} value={"1-Ano"} textView={"1º Ano"}/>
                        <InputRadio name={"aluno_sala"} id={"segundoAno"} value={"2-Ano"} textView={"2º Ano"}/>
                        <InputRadio name={"aluno_sala"} id={"terceiroAno"} value={"3-Ano"} textView={"3º Ano"}/>
                    </div>
                </div>
                <div className={styles.inputContainer}>
                    <SelectSala salas={salas}/>
                    <label htmlFor="sala">Sala</label>
                </div>
            </fieldset>
            <h3 className={styles.titleBoxProd}>Informações do(s) Produto(s)</h3>
            <div className={styles.boxProd__container}>
                {numBoxProd.map(numBox => <ProductBox key={numBox} styles={styles}/>)}
                
            </div>
            
            <div className={styles.btnContainer}>
                {numBoxProd.length > 1 && <button type='button' onClick={delBoxList} className="fadeIn"><AiOutlineMinus/></button>} 
                <button><BsFillSendCheckFill/></button>
                {numBoxProd.length < 6 && <button type='button' onClick={addBoxList} className="fadeIn"><AiOutlinePlus/></button>}
                
            </div>
            
        </form>
    )
    
}