import SaldoAtual from "./InfosExtra/SaldoAtual";
import ProdutosReceb from "./InfosExtra/ProdutosReceb";
import SaldoGasto from "./InfosExtra/SaldoGasto";
export default function CadProdutos({styles}) {
    return(
        <>
            <h1>Cadastro de Produtos</h1>
            <div className="infoExtra">
                <SaldoAtual styles={styles}/>
                <ProdutosReceb styles={styles}/>
                <SaldoGasto styles={styles}/>
            </div>
        </>

    )
}