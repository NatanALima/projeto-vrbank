/**
 * Calcula de SubTotal + Total dos Produtos
 * @param  {object} prodCollection Coleção de Produtos
 * @return {object} retorna a coleção de Produtos com subtotal e Total
*/

function calculateAndSetValues(prodCollection) {
	let produtosField = prodCollection.produtos;
	let subtotalCollection = [];

	produtosField.map(prodInfo => {
        let subtotal = prodInfo.qtd * prodInfo.valor;
        prodInfo.subtotal = subtotal;
        subtotalCollection.push(subtotal);
    });
  
    const total = subtotalCollection.reduce((total, currValue) => total + currValue);
    const newProdCollection = {...prodCollection, total}
  
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