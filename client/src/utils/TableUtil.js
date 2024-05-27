export default class TableUtil {
    //Define a propriedade como privada
    #dataCollection;

    constructor(dataCollection) {
        this.#dataCollection = dataCollection;
    
    }

    //Permite a alteração dos dados do Inpu 
    editValueTable() {
        const tempData = this.getEditableData();
        const input = this.inputEdit;
        let newDataValue = {...tempData, [input.target.name]: input.target.value}; 
        this.#dataCollection[this.idData] = newDataValue;
    }
    
    /*
    ===================================================
    ~~~~~~~~~~~~~~~~~~~~~ Getters ~~~~~~~~~~~~~~~~~~~~~
    ===================================================
    */
    //Retorna toda a linha de dados que está sendo manipulada
    getEditableData() {
        return this.#dataCollection[this.idData];

    }

    //Retorna a informação atualizada
    getDataCollection() {
        return [...this.#dataCollection];
    }

    /*
    ===================================================
    ~~~~~~~~~~~~~~~~~~~~~ Setters ~~~~~~~~~~~~~~~~~~~~~
    ===================================================
    */
    setIdData(inputElementRef) {
        this.idData = inputElementRef.target.closest('tr').id;
        
    }

    setInputEdit(inputEdit) {
        this.inputEdit = inputEdit;
    }




    
}