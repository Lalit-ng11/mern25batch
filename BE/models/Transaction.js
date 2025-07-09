// import { required } from "joi";
// import { ref } from "joi";
import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
    type:{
        type:String ,
        enum:["Income" , "Expense"],
        required:true,
        },
    amount:{
            type:Number ,
            required:true
        },
    category:{
            type:String,
            required:true
        },
    date:{
        type:Date,
        default:Date.now()
     },
     userId:{
       type: mongoose.Schema.Types.ObjectId, 
       ref:"userExpense"
     }


})
// module.exports = mongoose.model("transaction",TransactionSchema);
export default mongoose.model("transaction",TransactionSchema);