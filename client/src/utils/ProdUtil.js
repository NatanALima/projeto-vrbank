/*
=============================================================
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Funções Referentes ao calculo de quantidade total de Produtos
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
=============================================================
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
=============================================================
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Funções referentes ao calculo de Valor Total
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
=============================================================
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


export {calculateTotalProds, calculateTotalValue}