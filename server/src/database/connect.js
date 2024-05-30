import mongoose from 'mongoose';
const urlDb = "mongodb+srv://root:D2Q4ci7tO1pN3p9t@projetovrbank.wxwvphb.mongodb.net/?retryWrites=true&w=majority&appName=projetoVrBank"


export default async function connectToDatabase() {
    try {
        await mongoose.connect(urlDb);
        console.log('conectou Banco');

    } catch(err) {
        console.log('erro: ', err);
    }
}