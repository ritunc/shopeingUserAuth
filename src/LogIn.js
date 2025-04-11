require("dotenv").config();
const express = require('express');
const cors = require("cors")
const PORT = process.env.PORT || 5005;
const app = express();
const cookieParser = require('cookie-parser');
const { connectionMongoDb } = require("./connection/connection");



connectionMongoDb(process.env.MONGO_URL)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use(cors({
        origin:"https://shopeing-rituncs-projects.vercel.app",
        method: ["GET", "POST", "PUT", "DELETE"],
        credentials:true
}));



const UserSignUpLogInRoute = require('./router/router');





app.use(UserSignUpLogInRoute)

// app.post("/LogInData", async (req, res) => {
        
//         console.log(req.body);
// })

// app.post("/SignUp", async (req, res) => {
//         console.log(req.body);
// })


app.get("/", (req, res) => {
        console.log('Hello');
        res.write('Hello Sir !!');
})


app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
