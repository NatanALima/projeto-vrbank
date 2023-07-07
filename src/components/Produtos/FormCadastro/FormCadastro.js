import { useState } from "react";
import styles from '../../../assets/css/FormCadastro.module.css';
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
            <h3>Informações do Aluno</h3>
            <div className={styles.inputContainer}>    
                <input type="text" className="inputNome" required/>
                <label>Nome</label>      
            </div>
            
            <div className={styles.inputContainer}>
                <SelectSala salas={salas}/>
            </div>

            <h3>Informações do(s) Produto(s)</h3>
            <div className={styles.boxProd__container}>
                {numBoxProd.map(numBox => <ProductBox key={numBox} styles={styles}/>)}
                
            </div>
            
            <div className={styles.btnContainer}>
                {numBoxProd.length > 1 && <button type='button' onClick={delBoxList}><AiOutlineMinus/></button>} 
                <button><BsFillSendCheckFill/></button>
                {numBoxProd.length < 6 && <button type='button' onClick={addBoxList}><AiOutlinePlus/></button>}
                
            </div>
            
        </form>
    )
    
}