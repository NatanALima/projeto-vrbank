import InfoExtra from "./InfosExtra/InfoExtra";
import FormCadastro from "./FormCadastro/FormCadastro";

//Importação dos icones
//Icones do infoExtra;
import {LiaWalletSolid} from 'react-icons/lia';
import {LiaCoinsSolid} from 'react-icons/lia';
import {LiaShoppingBagSolid} from 'react-icons/lia';

export default function CadProdutos({styles}) {
    const infoBoxExtra = [{id: 1, iconBox: <LiaWalletSolid className={styles.infoExtra__icon}/>, infoBox: "R$2500", titleBox: "Saldo Disponível", classInfo: styles.infoExtra__saldoPos},
                          {id: 2, iconBox: <LiaShoppingBagSolid className={styles.infoExtra__icon}/>, infoBox: "Maçã", titleBox: "Últimos Produtos adquiridos", classInfo: styles.infoExtra__lastProd},
                          {id: 3, iconBox: <LiaCoinsSolid className={styles.infoExtra__icon}/>, infoBox: "R$1500", titleBox: "Valor de Despesa", classInfo: styles.infoExtra__saldoNeg}];

    return(
        <>
            <h1>Cadastro de Produtos</h1>
            <div className={styles.infoExtra}>
                {infoBoxExtra.map(info => {
                    return(
                        <InfoExtra key={info.id} styles={styles} iconBox={info.iconBox} infoBox={info.infoBox} titleBox={info.titleBox} classInfo={info.classInfo}/>
                    )
                })}

            </div>
            <FormCadastro/>
        </>

    )
}