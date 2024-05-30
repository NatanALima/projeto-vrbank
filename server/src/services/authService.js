import User from '../models/User.model';

export default async function loginService(userNameReq) {
    const res = await User.findOne({userName: userNameReq});
    return res;
}