const express = require('express');
const shoppingcartRouter = express.Router();
const {getAllShoppingcart,addShoppingcart, payShoppingcart} = require('../controllers/Shoppingcart');
const { login, signup, protect } = require("../controllers/Auth");

shoppingcartRouter
    .route("/")
    .all(protect)
    .get(getAllShoppingcart)
    .post(addShoppingcart);

shoppingcartRouter
    .route("/:id")
    .all(protect)
    .post(payShoppingcart)
    
    

module.exports = shoppingcartRouter;