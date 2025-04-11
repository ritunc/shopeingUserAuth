const mongoose = require('mongoose');

const User_Data_Schema = new mongoose.Schema({
        UserName: { type: String, required: true },
        Name: { type: String, required: true },
        SirName: { type: String, required: true },
        email: { type: String, required: true },
        passWord: { type: String, required: true },


        UserProduct: [{
                imageUrl: { type: String, required: true },
                productID: { type: Number, required: true },
                productPrice: { type: String, required: true },
                productName: { type: String, required: true },
                productRate: { type: String, required: true },
                productDiscount: { type: String, required: true },
                productMarketPrice: { type: String, required: true },
        }],
}, {timestamps:true}
)

const User_Data_model = mongoose.model('UserSignUpandLikeData', User_Data_Schema);

module.exports = User_Data_model;