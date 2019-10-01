import * as mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    id: {type: String, unique: true, required: true},
    passwd: {type: String, required: true},
    name: {type :String, required: true},
    phoneNum: { type: String}
})

export const Users = mongoose.model("users", UserSchema);