import bcrypt from "bcrypt";
import loginService from "../services/authService"

export default async function login(req, res) {   
    const { userName, password } = req.body

    try {
        const userInfo = await loginService(userName);
        
        const passIsValid = bcrypt.compare(password, userInfo.password);

        if(!userInfo || !passIsValid) {
            return res.status(400).send({
                message: "Erro: Usuário ou senha incorreto!"
            })
        }



    } catch(err) {
        console.log(`Erro no login: ${err}`);
        
    }
        


    
} 