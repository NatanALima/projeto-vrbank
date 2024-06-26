import { Schema, model } from 'mongoose';
import { hash } from 'bcrypt';

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

})

UserSchema.pre("save", async function(next) {
    const hashedPassword = await hash(this.password, 10);
    this.password = hashedPassword;
    next();
})

const User = model("User", UserSchema);
export default User;