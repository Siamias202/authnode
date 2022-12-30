import mongoose, { Schema } from "mongoose";

const bookSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },

    publisher:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    tc:{
        type:Boolean,
        required:true
    }

})


const BookModel = mongoose.model("book",bookSchema);


export default BookModel