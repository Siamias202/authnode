import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    author:{
        type:String,
        required:true
    }
})

const TodoModel = mongoose.model("todo",todoSchema);

export default TodoModel