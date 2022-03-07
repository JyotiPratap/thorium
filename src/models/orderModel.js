const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: "Customers"
    },
    productId: {
        type: ObjectId,
        ref: "Products"
    },
    amount: Number,
    date: String,
    isFreeAppUser: {
        type: Boolean,
        default: false
    }
}, 
{timestamps:true})

module.exports = mongoose.model('Order',orderSchema)