const mongoose = require('mongoose');

const orderitemsSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Products", required: true },
    quantity: { type: Number, required: true }
});


orderitemsSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

orderitemsSchema.set("toJSON", {
    virtuals: true,
});

const Orderitems = mongoose.model('Orderitems', orderitemsSchema);

module.exports = Orderitems;