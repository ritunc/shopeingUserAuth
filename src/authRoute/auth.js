const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;

const setUser = (user) => {
        console.log("jwt::::", user);

        return jwt.sign(
                {
                        userName: user.UserName,
                        email: user.email,
                },
                secret);
}

const getUser = (cookie) => {
        console.log("getCookie::::", cookie);

        try {
              const cookie_verify_data = jwt.verify(cookie, secret);

                return ({boole:true,cookie_verify_data});

        } catch (error) {
                console.log("Error of token:::", error.message)
                return false;
        }


}

module.exports = {
        setUser,
        getUser,
}