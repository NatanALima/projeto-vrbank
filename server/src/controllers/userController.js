import userServices from '../services/userService.js';

async function getAllUsers(req, res) {
    try {
        const allUsers = await userServices.getAllUsersServiece();
        allUsers.length > 0 ? res.status(200).json(allUsers) : res.status(200).send('Coleção Vazia!');

    } catch (err) {
        res.status(500).send(err.message);
    }
}


async function createUser(req, res) {
    try {
        const createdUser = await userServices.createUserService(req.body);
        res.status(201).json(createdUser);

    } catch(err) {
        res.status(500).send(err.message);
    }
}

export default {getAllUsers, createUser};