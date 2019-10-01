import * as mongoose from 'mongoose'

const InSchema = new mongoose.Schema({
    intName: { type : String, unique: true},
    intSub: {type : String}
})

export const In = mongoose.model("in", InSchema);