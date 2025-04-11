const express = require('express');
const router = express.Router();
const { handleLogInData, handleSignUpData, handleCookieVerified, handleProductWishlist } = require("../controller/controller")


router.post("/LogInData", handleLogInData);
router.post("/SignUp", handleSignUpData);
router.post("/cookieVerify", handleCookieVerified);
router.post("/wishlist", handleProductWishlist);



module.exports = router;