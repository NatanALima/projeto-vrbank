import User from '../models/User.model.js';

export default async function loginService(userNameReq) {
    const res = await User.findOne({userName: userNameReq});
    return res;
}