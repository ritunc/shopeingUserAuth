const mongoose = require('mongoose');

const connectionMongoDb = async(url) => {
        return mongoose.connect(url)
        .then(() => console.log("MongoDB is connected...."))
        .catch(() => console.log("MongoDB is not Connected...."));
}

module.exports = {
        connectionMongoDb,
}