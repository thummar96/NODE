const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id:{type: String,required: true},
    name:{type: String,required: true},
    description:{type: String,required: true},
    richDescription:{type: String, required: true},
    image:{type: String,required: true},
    images:{type: String,required: true},
    brand:{type: String,required: true},
    price:{type: Number,required: true},
    category:{type: mongoose.Schema.Types.ObjectId,required: true},
    countInStock:{type: Number,required: true},
    rating:{type: Number,required: true},
    isFeatured:{type: Boolean,required: true},
    dateCreated:{type: Date,required: true}
});

const Products = mongoose.model("Products",productSchema);

module.exports=Products;