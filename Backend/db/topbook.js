const mongoose = require("mongoose");

const topBookSchema = new mongoose.Schema({
    title:String,
    desc:String,
    price:String,
    category:String,
    imgURL:String,
    pdfBook:String
} );

module.exports=mongoose.model("topproducts" , topBookSchema)