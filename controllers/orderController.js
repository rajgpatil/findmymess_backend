import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"

//Placing orders using cash on dilivary method
const placeOrder = async(req,res)=>{
    try{
        const{userId,items,amount, address} = req.body

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            date:Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true, message:"Order Placed"})

    }
    catch(err){
        console.log(err)
        res.json({success:false,message:err.message})
    }
}

//Placing orders using stripe method
const placeOrderStripe = async(req,res)=>{

}

//Placing order using Razorpay Method
const placeOrderRazorpay = async(req,res)=>{

}

//All orders data for admin panel
const allOrders = async(req,res)=>{

}

// User order data for frontend
const userOrders = async(req,res) =>{

}

//update order status from Admin Panel
const updateStatus = async(req,res)=>{

}

export {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus}