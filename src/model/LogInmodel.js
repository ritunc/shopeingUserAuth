const mongoose = require('mongoose');

const LogIn_Data__Schema = new mongoose.Schema({
        email:{ type: String, required:true},
        password:{ type: String, required: true}
}, {timestamps:true})

const LogInData = mongoose.model("UserLogInData", LogIn_Data__Schema);

module.exports = {
        LogInData,  
}