import { useEffect, useState } from "react";
import styles from '../../../assets/css/FormCadastro.module.css';
import '../../../assets/css/animation.css';
import InputRadio from "../../layout/InputRadio";
import SelectSala from './SelectSala';
import ProductBox from './ProductBox';

//Icones de formulário
import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai';
import {BsFillSendCheckFill} from 'react-icons/bs';

//Requisições de API
import { addProdutosService } from "../../../services/produtos.service";
import { addDespesaBancoService, removeSaldoBancoService } from "../../../services/banco.service";

// Janelas modais
import { showSweetErrorModal, showSweetSuccessModal } from "../../../models/SweetModal";
import { getAllSalasService, getSalasByAnoService } from "../../../services/sala.service";

//Util
import { calculateTotalProds, calculateTotalValue } from "../../../utils/ProdUtil";



export default function FormCadastro() {

    //Variáveis utilizadas para cadastro
    const [client, setClient] = useState({});
    const [pagamento, setPagamento] = useState();
    const [produtos, setProdutos] = useState([]);
    const [anoSala, setAnoSala] = useState("all");

    //Variável contendo as informações de sala para Input
    const [salas, setSalas] = useState([]);

    const [numBoxProd, setnumBoxProd] = useState([0]);


    //Seta, em um objeto, as informações do Cliente (nome, categoria, sala [se houver] etc.);
    const handleOnChangeClient = (value, field) => {
        setClient(prevCliente => ({...prevCliente, ...{[field]: value}}));

    }

    const getSalasInfo = async (filter) => {
        try {
            let res;
            switch (filter) {
                case "all":
                    res = await getAllSalasService();
                    break;
                default:
                    res = await getSalasByAnoService({anoSala: filter});
                    break;
            }
            setSalas(res.data);
        } catch (err) {
            console.log(err.message);
        }
    } 


    


    /*
    =========================================================================
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Funções referentes ao BoxProd (adiciona e remove Box de Produtos)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    =========================================================================
    */
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
      

    /*
    =========================================================================
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                Envio de Formulário
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    =========================================================================
    */

    const handleSendProdInfo = async (e) => {
        e.preventDefault();
        try {
            let statusPagamento;
            let msgStatus;
            const totalProds = calculateTotalProds(produtos);
            const totalValue = calculateTotalValue(produtos);

            //Verifica a opção de pagamento escolhida
            if(pagamento === "payNow") {
                await removeSaldoBancoService({valor: totalValue});
                statusPagamento = "PAGO";
                msgStatus = `O Valor Total dos produtos é de ETC$${totalValue}`;
            
            } else {
                await addDespesaBancoService({valor: totalValue});
                statusPagamento = "NÃO PAGO";
                msgStatus = `O Valor Total da Divida é de ETC$${totalValue} (Essa dívida pode ser paga mais tarde)`; 
            }


            const resProd = await addProdutosService({cliente: client, produtos: produtos, total_qtdProdutos: totalProds, total_valor: totalValue, status_pagamento: statusPagamento});
            
            showSweetSuccessModal("Produto Cadastrado com sucesso!", msgStatus);
            
            
        } catch (err) {
            const errInfo = err.response.data;
        
            if(errInfo?.isError) {
                showSweetErrorModal("Erro ao Cadastrar os Produtos!", errInfo.errorMsg);
    
            } else {
                showSweetErrorModal("OPS!", "Algo deu Errado!");

            }
        
        }

    }

    /*
    =========================================================================
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                useEffects
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    =========================================================================
    */

    //Verifica se a categoria do cliente é aluno para a definição ou exclusão do campo sala
    useEffect(() => {
        if(client.categoria !== "aluno" && Object({...client}).hasOwnProperty("sala")) {
            delete client.sala;
        }
    },[client])

    //Define as salas para o Input de sala
    useEffect(() => {
        getSalasInfo(anoSala);       

    }, [anoSala])

    

    return(
        <form onSubmit={handleSendProdInfo}>
            <fieldset id={styles.clientContainer}>
                <legend>Informações do Cliente</legend>
                <div className={styles.inputContainer}>
                    <input type="text" className="inputNome" onChange={e => handleOnChangeClient(e.target.value, "nome")} required/>
                    <label>Nome do Aluno</label>
                </div>            
                <div className={styles.optionContainer}>
                    <h4 className={styles.optionTitle}>Categoria</h4>
                    <div className={styles.optionCollection}>
                        <div className={styles.optionCollection__content}>
                            <input type="radio" name="client_categ" id="aluno" value={"aluno"} onChange={e => handleOnChangeClient(e.target.value, "categoria")}/>
                            <label htmlFor="aluno">Aluno(a)</label>
                        </div>
                        <div className={styles.optionCollection__content}>
                            <input type="radio" name="client_categ" id="professor" value={"professor"} onChange={(e) => handleOnChangeClient(e.target.value, "categoria")}/>
                            <label htmlFor="professor">Professor(a)</label>
                        </div>
                        <div className={styles.optionCollection__content}>
                            <input type="radio" name="client_categ" id="funcionario" value={"funcionario"} onChange={(e) => handleOnChangeClient(e.target.value, "categoria")}/>
                            <label htmlFor="funcionario">Funcionário(a)</label>
                        </div>
                        <div className={styles.optionCollection__content}>
                            <input type="radio" name="client_categ" id="other" value={"other"} onChange={(e) => handleOnChangeClient(e.target.value, "categoria")}/>
                            <label htmlFor="other">Outro</label>
                        </div>
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <legend>Forma de Pagamento</legend>
                <div className={styles.optionContainer}>
                    <div className={styles.optionCollection}>
                        <InputRadio name={"tipo_pagamento"} id={"payNow"} value={"payNow"} textView={"Pagar agora"} setValue={setPagamento}/>
                        <InputRadio name={"tipo_pagamento"} id={"payLater"} value={"payLater"} textView={"Pagar Depois"} setValue={setPagamento}/>
                    </div>
                </div>
                
            </fieldset>
            {(client && client.categoria === "aluno") && 
            <fieldset id={styles.salaContainer}>
                <legend>Informações da Sala</legend>
                <div className={styles.optionContainer}>
                    <h4 className={styles.optionTitle}>Filtragem por Ano</h4>
                    <div className={styles.optionCollection}>
                        <InputRadio name={"aluno_sala"} id={"todosAno"} value={"all"} textView={"Todos"} checked={anoSala === "all"} setValue={setAnoSala}/>
                        <InputRadio name={"aluno_sala"} id={"primeiroAno"} value={1} textView={"1º Ano"} setValue={setAnoSala}/>
                        <InputRadio name={"aluno_sala"} id={"segundoAno"} value={2} textView={"2º Ano"} setValue={setAnoSala}/>
                        <InputRadio name={"aluno_sala"} id={"terceiroAno"} value={3} textView={"3º Ano"} setValue={setAnoSala}/>
                    </div>
                </div>
                <div className={styles.inputContainer}>
                    <SelectSala salas={salas} setInfo={handleOnChangeClient}/>
                    <label htmlFor="sala">Sala</label>
                </div>
            </fieldset>
            }
            <h3 className={styles.titleBoxProd}>Informações do(s) Produto(s)</h3>
            <div className={styles.boxProd__container}>
                {numBoxProd.map(numBox => <ProductBox key={numBox} produtosCollection={produtos} setProdutos={setProdutos} currIndex={numBox} styles={styles}/>)}
                
            </div>
            
            <div className={styles.btnContainer}>
                {numBoxProd.length > 1 && <button type='button' onClick={delBoxList} className="fadeIn"><AiOutlineMinus/></button>} 
                <button><BsFillSendCheckFill/></button>
                {numBoxProd.length < 6 && <button type='button' onClick={addBoxList} className="fadeIn"><AiOutlinePlus/></button>}
                
            </div>
            
        </form>
    )
    
}