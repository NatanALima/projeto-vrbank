import bcrypt from "bcrypt";
import loginService from "../services/authService.js";
import errorMessage from "../helper/errorMessageHelper.js";

async function login(req, res) {
    const { userName, password } = req.body;
    

    try {
        const userInfo = await loginService(userName);


        if(!userInfo) return res.status(400).json(errorMessage("Usuário Incorreto ou não existe!", "userNameInvalid"));
        
        const passIsValid = await bcrypt.compare(password, userInfo.password);

        if(!passIsValid) return res.status(400).json(errorMessage("Senha Incorreta!", "userPassInvalid"));


        res.status(200).json(userInfo);



    } catch(err) {
        res.status(500).json({isError: true, errorMsg: err.message});
        
    }

    
} 

export default login;