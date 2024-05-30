import bcrypt from "bcrypt";
import loginService from "../services/authService.js"

async function login(req, res) {
    const { userName, password } = req.body;

    try {
        const userInfo = await loginService(userName);

        if(!userInfo) return res.status(400).send({message: "Erro: Usuário Incorreto!"});
        
        const passIsValid = await bcrypt.compare(password, userInfo.password);

        if(!passIsValid) return res.status(400).send({message: "Erro: Senha Incorreta!"})

        res.status(200).json(userInfo);



    } catch(err) {
        console.log(`Erro no login: ${err}`);
        
    }

    
} 

export default login;