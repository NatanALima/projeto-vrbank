import styles from '../../assets/css/Extrato.module.css';
import TableInfo from '../TableInfo/TableInfo';

export default function Extrato() {
    
    // Todos valores passados para a tabela são temporários e foram unicamente utilizados a fim de verificar a estilização, haja vista que esses valores posteriormente serão passados pelo BackEnd
    const addZeroDate = (infoDate) => {
        return infoDate.toString().length === 1 ? "0"+infoDate : infoDate
    }

    const dateFormat = () => {
        const data = new Date();
        const day = addZeroDate(data.getDay());
        const month = addZeroDate(data.getMonth()+1);
        const year = data.getFullYear();
        const hour = addZeroDate(data.getHours());
        const minutes = addZeroDate(data.getMinutes());
        const formatedDate = `${day}/${month}/${year} ${hour}:${minutes}`;
        return formatedDate;
    }

    const extrato = [{Data: dateFormat(), Histórico: "Pagamento de Produtos", Valor: -55},
                     {Data: dateFormat(), Histórico: "Pagamento de Produtos", Valor: -24},
                     {Data: dateFormat(), Histórico: "Pagamento de Produtos", Valor: -12},
                     {Data: dateFormat(), Histórico: "Pagamento de Produtos", Valor: -245},];
    return(
        <section className={styles.extrato}>
            <h1>Extrato</h1>
            <TableInfo title={"Extrato Bancário"} objectData={extrato}/>
        </section>
    )
}