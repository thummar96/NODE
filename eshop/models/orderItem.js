const mongoose = require("mongoose");

const orderItemsSchema = new mongoose.Schema({
    id:{type: String,required: true},
    product:{type: mongoose.Schema.Types.ObjectId,required: true},
    qauntity:{type: Number,required: true}
    
});

const OderItems = mongoose.model("OderItems",orderItemsSchema);

module.exports=OderItems;