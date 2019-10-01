import * as mongoose from 'mongoose'

const ItemsSchema = new mongoose.Schema({
    itemName: { type : String, unique: true},
    itemData: String,
    itemPic:String
})

export const Items = mongoose.model("items", ItemsSchema);