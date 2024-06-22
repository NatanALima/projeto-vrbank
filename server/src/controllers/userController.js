import userServices from '../services/userService.js';
import errorMessage from '../helper/errorMessageHelper.js';
import bancoService from "../services/bancoService.js";

async function getAllUsers(req, res) {
    try {
        const allUsers = await userServices.getAllUsersService();
        allUsers.length > 0 ? res.status(200).json(allUsers) : res.status(200).send('Coleção Vazia!');

    } catch (err) {
        res.status(500).send(err.message);
    }
}


async function createUser(req, res) {
    try {
        const { userName } = req.body;

        const hasUser = await userServices.getOneUserServiceByName(userName);

        if(hasUser) return res.status(400).json(errorMessage("Usuário já Existe!", "userExists"));

        const createdUser = await userServices.createUserService(req.body);

        await bancoService.bancoInit({user_ref: createdUser.id});
        res.status(201).json(createdUser);

    } catch(err) {
        res.status(500).json({isError: true, errorMsg: err.message});
    }
}

export default {getAllUsers, createUser};