import setLocalDate from "./DateUtil";


/*
=====================================================================
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         Calcula a quantidade total de produtos por cadastro
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
=====================================================================
*/

/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          Função auxiliar
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function getAllQtdProds(prodCollection) {
    let allQtdProds = [];
    prodCollection.map(produto => allQtdProds.push(Number(produto.qtd)));
    return allQtdProds;
}



/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         Função Principal 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function calculateTotalProds(prodCollection) {
    const allQtdCollectionInfo = getAllQtdProds(prodCollection);

    const totalProds = allQtdCollectionInfo.reduce((total, currValue) => total + currValue);

    return Number(totalProds);
}






/*
=====================================================================
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                 Calcula o Subtotal do recebimento
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
=====================================================================
*/


/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          Função auxiliar
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function getAllSubTotal(prodCollection) {
    let subTotalCollection = [];
    prodCollection.map(produto => subTotalCollection.push(produto.subtotal));
    return subTotalCollection    
}




/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         Função Principal 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

/**
 * Calcula o Valor Total dos produtos
 * @param  {Array} prodCollection Coleção de produtos 
 * @return {Number} retorna o valor Total dos produtos;
*/

function calculateTotalValue(prodCollection) {
    const subtotalCollectionInfo = getAllSubTotal(prodCollection);
    const total = subtotalCollectionInfo.reduce((total, currValue) => total + currValue);
    return Number(total);
}


/*
=====================================================================
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                    Converte e Formata data(s)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
=====================================================================
*/

/**
 * Converte e formata as datas de todos os produtos cadastrados por usuário
 * @param  {Array} prodInfo Coleção de produtos 
 * @return {Array} retorna a Coleção de produtos com as datas convertidas e formatadas;
*/
function changeDate(prodInfo) {
    const newProdInfo = [...prodInfo];
    
    for(let info of prodInfo) {
        if(info.hasOwnProperty("data_aquisicao")) {
            info.data_aquisicao = setLocalDate(info.data_aquisicao);

        } else if(info.hasOwnProperty("data_edicao")) {
            info.data_edicao = setLocalDate(info.data_edicao);

        } else if(info.hasOwnProperty("createdAt")) {
            info.createdAt = setLocalDate(info.createdAt);

        } else if(info.hasOwnProperty("modifiedAt")) {
            info.modifiedAt = setLocalDate(info.modifiedAt);
            
        }
    }

    return newProdInfo;
}



/*
=====================================================================
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Busca pelos últimos três produtos recebidos
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
=====================================================================
*/

/**
 * Busca pelos últimos três produtos recebidos
 * @param  {Array} prodInfo Coleção de produtos 
 * @return {String} retorna uma string com os três últimos produtos recebidos;
*/
function findLastProds(prodInfo) {
    const arrProds = [];

    for(let info of prodInfo) {
        const produtos = info.produtos;
        produtos.map(produto => arrProds.length < 3 && arrProds.push(produto.nome));
    }
    return arrProds.join(", ");
}


export {calculateTotalProds, calculateTotalValue, changeDate, findLastProds}