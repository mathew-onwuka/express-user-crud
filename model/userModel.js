const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type : String,
    },
    password: {
        type: String,
    },
    PhoneNumber: {
        type: Number,
    },
    email: {
        type: String,
    }
})

module.exports = mongoose.model("user", userSchema);

