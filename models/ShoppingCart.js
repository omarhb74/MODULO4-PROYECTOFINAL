const mongoose = require('mongoose');
const shoppingcartSchema = new mongoose.Schema({
    invoiceNumber:{
        type:String,
        required:true,
        unique: true
    },
    status:{
        type:String,
        required:true
    },
    totalAmount:{
        type:Number,
        required:true,
        default: 0
    },
    user:{
        type:String,
        required:true,
    },
    products: [
        { 
            productId: {
                type:String,
                required: true,
            },
            quantity: {
                type:Number,
                required: true,
            },
            price:{
                type:Number,
                required: true,
            }
        }
    ]
});

const shoppingcartModel = mongoose.model("shoppingcart",shoppingcartSchema);
module.exports = shoppingcartModel