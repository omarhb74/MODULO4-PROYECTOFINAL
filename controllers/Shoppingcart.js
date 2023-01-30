const Shoppingcart = require("../models/Shoppingcart");



const getAllShoppingcart = async (req,res)=>{
    const shoppingcart = await Shoppingcart.find();
    res.status(200).json({
        status:"ok",
        data:shoppingcart,
    })
};
//

const addShoppingcart = async (req,res) => {
    let newShoppingcart =new Shoppingcart();
    newShoppingcart.invoiceNumber=req.body.invoiceNumber;
    console.log(req.body.invoiceNumber);
    newShoppingcart.status=req.body.status;
    newShoppingcart.totalAmount=req.body.totalAmount;
    newShoppingcart.user=req.body.user;
    newShoppingcart.products=req.body.products;
    
        newShoppingcart=await newShoppingcart.save();
        console.log(newShoppingcart)
 
    
    res.status(200).json({
        status:'ok',
        dataInserted:newShoppingcart
    })
};

    const payShoppingcart = async (req,res) => {
        const payshoppingcart = await Shoppingcart.findById(req.params.id)
        console.log(req.params.id);
        let invoiceNumber = payshoppingcart.invoiceNumber;
        let status=payshoppingcart.status;
        let totalAmount=payshoppingcart.totalAmount;
        let user=payshoppingcart.user;
        const products = payshoppingcart.products;
        let  shoppingUpdate

        if (products.length>0 && status==="PENDING")
        {
            status="PAID";
        
        
        }
        else
        {
            console.log("ERROR el carrito no tiene productos");

        }

        shoppingUpdate = {
            invoiceNumber,status,totalAmount,user,products
        }
        const shoppingcartUpdate = await Shoppingcart.findByIdAndUpdate(req.params.id,shoppingUpdate)


        console.log('ProductJona',shoppingcartUpdate); 
        res.status(200).json({
            status:`Success`,
            data: shoppingcartUpdate
        })
        }




module.exports = {
    getAllShoppingcart,
    addShoppingcart,
    payShoppingcart
}