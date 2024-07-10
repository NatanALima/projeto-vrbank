import { createContext, useContext, useEffect, useState } from "react";
import { getAllProdsByUserService } from "../services/produtos.service";
import { changeDate, findLastProds } from "../utils/ProdUtil";

const ProdContext = createContext();

export default function ProdProvider({children}) {
    const [produtosInfo, setProdutosInfo] = useState([]);
    const [lastProds, setLastProds] = useState("");
    const [totalProds, setTotalProds] = useState(0);


    useEffect(() => {
        ( async () => {
            try {
                const resProd = await getAllProdsByUserService();
                if(resProd.data) {
                    const newResProd = changeDate(resProd.data);
                    const allProdsQtd = resProd.data.reduce((total, prodInfo) => total + prodInfo.total_qtdProdutos, 0);

                    setProdutosInfo(newResProd);
                    setTotalProds(allProdsQtd);
                    setLastProds(findLastProds(resProd.data));

                }

            } catch (err) {
                console.log('Erro ao Procurar os Produtos: ', err.message);
            }

        })()
    }, []);

    return(
        <ProdContext.Provider value={{produtosInfo, setProdutosInfo, totalProds, setTotalProds, lastProds, setLastProds}}>
            {children}
        </ProdContext.Provider>
    )
}

export const useProd = () => useContext(ProdContext);