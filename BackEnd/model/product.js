const mongoose = require("mongoose")
const productschema = new mongoose.Schema({
    name: { type: String, require: true },
    image: { type: String, require: true },
    price: { type: Number, require: true },
    qty: { type: Number, require: true },
    info: { type: String, require: true },
}, { timestamps: true })
const product = mongoose.model("product", productschema)
module.exports = product;   