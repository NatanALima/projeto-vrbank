const mongoose = require('mongoose');
const urlDb = "mongodb+srv://root:D2Q4ci7tO1pN3p9t@projetovrbank.wxwvphb.mongodb.net/?retryWrites=true&w=majority&appName=projetoVrBank"


const connectToDatabase = async () => {
    try {
        await mongoose.connect(urlDb);
        console.log('conectou Banco')

    } catch(err) {
        console.log('erro: ', err);
    }
}

module.exports = connectToDatabase;