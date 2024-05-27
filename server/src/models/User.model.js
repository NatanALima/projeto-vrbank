const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
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

UserSchema.pre("save", async (next) => {
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

const User = mongoose.model("User", UserSchema);
module.exports = User;