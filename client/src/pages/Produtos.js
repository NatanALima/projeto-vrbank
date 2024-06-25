import { Outlet } from 'react-router-dom';
import styles from '../assets/css/Produtos.module.css';
import NavProd from '../components/Produtos/NavProd';

//Importação dos icones
//Icones do infoExtra;
import {TbPigMoney} from 'react-icons/tb';
import {PiHandCoinsDuotone} from 'react-icons/pi';
import {BsHandbag, BsBoxSeam} from 'react-icons/bs'
import { useEffect, useState } from 'react';
import { getBancoInfoService } from '../services/banco.service';
import { showSweetErrorModal } from '../models/SweetModal';

export default function Produtos() {
    const [saldoBanco, setSaldoBanco] = useState();
    const [dividaBanco, setDividaBanco] = useState();

    

    useEffect(() => {
        (async () => {
            try {
                const res = await getBancoInfoService();
                const {saldo_atual, divida_atual} = res.data;
                setSaldoBanco(saldo_atual);
                setDividaBanco(divida_atual);
            } catch (err) {
                console.log(err.message);
            }
    
        })()

    }, [])

    const infoBoxExtra = [{id: 1, IconBox: TbPigMoney, infoBox: saldoBanco, titleBox: "Saldo Disponível", classInfo: "content__infoStatic", isMoney: true, moneyStatus: "positive"},
                          {id: 2, IconBox: BsHandbag, infoBox: "Maçã", titleBox: "Últimos Produtos adquiridos", classInfo: "content__infoDinamic", isMoney: false},
                          {id: 3, IconBox: PiHandCoinsDuotone, infoBox: dividaBanco, titleBox: "Valor de Despesa", classInfo: "content__infoStatic", isMoney: true, moneyStatus: "negative"},
                          {id: 4, IconBox: BsBoxSeam, infoBox: "40", titleBox: "Total de Produtos Recebidos", classInfo: "content__infoStatic", isMoney: false}];
    return(
        <>
            <NavProd styles={styles}/>
            <section className={styles.produtos}>
                <Outlet context={{styles, infoBoxExtra}}/>
            </section>
        </>
    )
}