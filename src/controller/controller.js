const User_Data_model = require('../model/model');

const { setUser, getUser } = require('../authRoute/auth')



const handleLogInData = async (req, res) => {

        const { email, password: passWord } = req.body;

        const user = await User_Data_model.findOne({ email, passWord })

        if (!user) {

                return (res.json({ message: "User is not found" }));

        }

        const token = setUser(user);
     

        res.cookie("uid", token, {
                httpOnly: false,   // Prevent client-side JS from accessing cookie if true
                secure: false,    // Set to `true` if using HTTPS
                sameSite: "lax"   // Controls when cookies are sent
        }
        );

        res.json({ message: "LogIn successfully" });

};


/*SigUp Data */
const handleSignUpData = async (req, res) => {

        const { UserName, Name, SirName, email, passWord } = req.body;

        const data = await User_Data_model.create({
                UserName, Name, SirName, email, passWord
        });

        if (!data) {

                return (res.json({ message: "User Not Created Successfully" }));

        } else {

                console.log("Enter:::");
                console.log("SignUpData submited successfully::", data);

                return (res.json({ message: "SignUp Successfully" }));

        }

}



/* Cookie Verified */
const handleCookieVerified = (req, res) => {
        const { Cookie_data } = req.body;
        const verify_token = getUser(Cookie_data);
        console.log("Value_Token", verify_token);
        return (res.json({ Boolean: verify_token }))
}





/* ProductWishlist */
const handleProductWishlist = async (req, res) => {
        // console.log("ProductWishlist:::", req.body);
        const { imageUrl, productDiscount, productID, productMarketPrice, productName, productPrice, productRate, cookieConv } = req.body;
        const { userName:UserName, email } = cookieConv;
        // console.log("userName:::", userName, "email:::", email);

        const response = await User_Data_model.findOneAndUpdate({ UserName, email }, {
                $push: {
                        UserProduct: {
                                imageUrl, productDiscount, productID, productMarketPrice,
                                productName, productPrice, productRate
                        }
                }
        });

        console.log("ArrLenth:::",response.UserProduct.length + 1);

        res.json({ message:'Like Item submitted successfully', wishList_Length: response.UserProduct.length + 1})
        

}




module.exports = {
        handleLogInData,
        handleSignUpData,
        handleCookieVerified,
        handleProductWishlist,
}