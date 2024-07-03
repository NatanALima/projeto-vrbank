import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getBancoInfoService } from "../services/banco.service";

const BancoContext = createContext();

export default function BancoProvider({children}) {
    const [saldo, setSaldo] = useState(0);
    const [divida, setDivida] = useState(0);

    useEffect(() => {
        (async () => {
            try {
                const res = await getBancoInfoService();
                const {saldo_atual, divida_atual} = res.data;
                setSaldo(saldo_atual);
                setDivida(divida_atual);


            } catch (err) {
                console.log(err.message);
            } 
        })()
    }, [])

    // const bancoValueMemo = useMemo(() => ({saldo, divida}))

    return(
        <BancoContext.Provider value={{saldo, setSaldo, divida, setDivida}}>
            {children}
        </BancoContext.Provider>
    )
}

export const useBanco = () => useContext(BancoContext);