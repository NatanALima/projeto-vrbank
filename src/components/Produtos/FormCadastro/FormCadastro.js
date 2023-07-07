import styles from '../../../assets/css/FormCadastro.module.css';
import SelectSala from './SelectSala';
import ProductBox from './ProductBox';

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
    return(
        <form>
            <h3>Informações do Aluno</h3>
            <div className={styles.inputContainer}>    
                <input type="text" className="inputNome" required/>
                <label>Nome</label>      
            </div>
            
            <div className={styles.inputContainer}>
                <SelectSala salas={salas}/>
                <label>Sala</label>
            </div>

            <div className={styles.boxProd}>
                <h3>Informações do(s) Produto(s)</h3>
                <ProductBox styles={styles}/>
            </div>
            
            <button>Remover</button>
            <button>Cadastrar</button>
            <button>Adicionar</button>
        </form>
    )
    
}