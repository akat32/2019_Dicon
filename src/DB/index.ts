import * as mongoose from "mongoose"
import { Users } from './Schema/Users/Users'
import { Items } from './Schema/Items/Items'
const uri: string = "mongodb://127.0.0.1:27017/aaqqaa";

let db = mongoose.connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Succesfully Connected!");
  }
});

export { Users, Items }