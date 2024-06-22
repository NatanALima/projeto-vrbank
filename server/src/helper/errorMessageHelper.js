/**
 * @param {string} errMsg Mensagem de Erro 
 * @param {string} errName Tipo de Erro
 * @returns {object} Objeto contendo as informações de Erro 
*/

export default function errorMessage(errMsg, errName) {
    return {isError: true, errorMsg: errMsg, errorName: errName}
}