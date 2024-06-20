import bcrypt from "bcrypt";
import loginService from "../services/authService.js";
import bancoService from "../services/bancoService.js";

async function login(req, res) {
    const { userName, password } = req.body;
    

    try {
        const userInfo = await loginService(userName);

        if(!userInfo) return res.status(400).json({isError: true, errorMsg: "Usuário Incorreto ou não existe!", errorName: "userNameInvalid"});
        
        const passIsValid = await bcrypt.compare(password, userInfo.password);

        if(!passIsValid) return res.status(400).json({isError: true, errorMsg: "Senha Incorreta!", errorName: "userPassInvalid"});


        //inicialização do Banco (caso não tenha sido inicializada ainda)
        const BancoInfo = await bancoService.getInfoByUserService(userInfo._id);

        if(BancoInfo.length === 0) {
            const startedBanco = await bancoService.bancoInit({user_ref: userInfo._id});
            console.log(startedBanco);
        }

        res.status(200).json(userInfo);



    } catch(err) {
        res.status(500).json({isError: true, errorMsg: err.message});
        
    }

    
} 

export default login;