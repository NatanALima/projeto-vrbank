import { useEffect, useRef, useState } from 'react';
import '../../../assets/css/animation.css';

export default function ProductBox({produtosCollection, setProdutos, currIndex, styles}) {
    const inputRef = useRef(null);
    const [valor, setValor] = useState();
    const [qtd, setQtd] = useState();
    const [subtotal, setSubTotal] = useState();

    const handleOnChangeProdutos = (value, field) => {
        let produtos = [...produtosCollection];
        produtos[currIndex] = {...produtos[currIndex], ...{[field]: value}};
        setProdutos(produtos);
    }

    //Permite que o subTotal seja calculado
    const handleOnChangeValor = (e) => {
        setValor(Number(e.target.value));
        handleOnChangeProdutos(Number(e.target.value), "valor");
    }

    const handleOnChangeQtd = (e) => {
        setQtd(Number(e.target.value));
        handleOnChangeProdutos(Number(e.target.value), "qtd");
    }

    const calcSubtotal = () => {
        if(produtosCollection[currIndex]?.qtd && produtosCollection[currIndex]?.valor) {
            const {qtd, valor} = produtosCollection[currIndex];
            const subtotalValue = Number(qtd) * Number(valor);
            setSubTotal(subtotalValue);
            
            handleOnChangeProdutos(subtotalValue, "subtotal");
            

        } else {
            setSubTotal(null);
        }
    }

    //A cada mudança dos campos de quantidade e valor, o subtotal é alterado
    useEffect(() => {
        calcSubtotal();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [valor, qtd]);



    return(
        <div className={`${styles.boxProd__content} fadeLeft`}>
            <div className={styles.inputContainer}>
                <input type="text" className="prodName" required onChange={(e) => handleOnChangeProdutos(e.target.value, "nome")}/>
                <label>Nome do Produto</label>
            </div>
            <div className={styles.inputContainer}>
                <input type="number" className="prodValue" required onWheel={(e) => e.target.blur()} onChange={e => handleOnChangeValor(e)}/>
                <label>Valor do Produto</label>
            </div>
            <div className={styles.inputContainer}>
                <input type="number" className="prodQtd" required onWheel={(e) => e.target.blur()} onChange={e => handleOnChangeQtd(e)}/>
                <label>Quantidade do Produto</label>
            </div>
            <div className={`${styles.inputContainer} ${subtotal ? styles.inputContainer__fixed : ""}`}>
                <input type="number" ref={inputRef} value={subtotal ? subtotal : ""} className="prodSubTotal" required onWheel={(e) => e.target.blur()} onChange={e => handleOnChangeProdutos(e.target.value, "subtotal")} readOnly={true}/>
                <label>Subtotal</label>
            </div>
        </div>
    )
}