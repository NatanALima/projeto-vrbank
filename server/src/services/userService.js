import User from '../models/User.model.js';

async function getAllUsersServiece() {
    const res = await User.find({});
    return res;
}

async function createUserService(userInfo) {
    const res = await User.create(userInfo);
    return res;
}

export default {getAllUsersServiece, createUserService};