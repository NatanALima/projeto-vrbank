import mongoose from 'mongoose';

export default async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('conectou Banco');

    } catch(err) {
        console.log('erro: ', err);
    }
}