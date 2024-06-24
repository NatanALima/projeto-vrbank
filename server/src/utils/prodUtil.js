/*
===============================================
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
              Funções De auxílio
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
===============================================
*/

/**
 * Calcula e define Subtotal
 * @param  {object} prodInfocollection Coleção com as informações dos produtos
 * @return {object} retorna a coleção contendo o subtotal;
*/

function calculateAndSetSubTotal(prodInfoCollection) {
    let subtotalCollection = [];

    //Definindo SubTotal (qtd * valor) para cada Produto
    prodInfoCollection.map(prodInfo => {
        let subtotal = prodInfo.qtd * prodInfo.valor;
        prodInfo.subtotal = subtotal;
        subtotalCollection.push(subtotal);
    })

    return subtotalCollection;

}



/**
 * Calcula o Valor Total dos produtos
 * @param  {object} subtotalCollectionInfo Coleção com as informações de Subtotal
 * @return {object} retorna o valor Total dos produtos;
*/

function calculateTotalValue(subtotalCollectionInfo) {
    const total = subtotalCollectionInfo.reduce((total, currValue) => total + currValue);
    return total;
}



/**
 * Calcula a quantidade Total de Produtos
 * @param  {object} prodInfoCollection Coleção com as informações dos produtos
 * @return {object} retorna a quantidade Total de produtos;
*/

function calculateTotalQtdProd(prodInfoCollection) {
    let qtdProdCollection = [];
    prodInfoCollection.map(prodInfo => qtdProdCollection.push(prodInfo.qtd));
    const totalQtdProd = qtdProdCollection.reduce((total, currValue) => total + currValue);

    return totalQtdProd;
}

/**
 * Calcula Subtotal, quantidade total de produtos e valor total
 * @param  {object} prodCollection Coleção de Produtos
 * @return {object} retorna a coleção de Produtos com subtotal, quantidade total de Produtos e valor Total
*/

/*
===============================================
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
              Funções Principais
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
===============================================
*/

function calculateAndSetValues(prodCollection) {
	let produtosField = prodCollection.produtos;

    const subtotalCollection = calculateAndSetSubTotal(produtosField);
    const total_valor = calculateTotalValue(subtotalCollection);
    const total_qtdProdutos = calculateTotalQtdProd(produtosField);


    const newProdCollection = {...prodCollection, total_qtdProdutos, total_valor};
  
    return newProdCollection;
  
}

function isNewValueDifferent(prodCollectionBase, prodCollectionEdit) {
    const prodInfoBase = prodCollectionBase.produtos;
    const prodInfoEdit = prodCollectionEdit.produtos;

    for(let i=0; i < prodInfoBase.length; i++) {
        if(prodInfoEdit[i].qtd !== prodInfoBase[i].qtd || 
           prodInfoEdit[i].valor !== prodInfoBase[i].valor) {
            return true;
        }
    }
    return false;
}


export {calculateAndSetValues, isNewValueDifferent}