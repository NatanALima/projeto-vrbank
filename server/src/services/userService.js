import User from '../models/User.model.js';

async function getAllUsersService() {
    const res = await User.find({});
    return res;

}

async function getOneUserServiceByName(userNameInfo) {
    const res = await User.findOne({userName: userNameInfo})
    return res;
}

async function createUserService(userInfo) {
    const res = await User.create(userInfo);
    return res;
}

export default {getAllUsersService, getOneUserServiceByName, createUserService};