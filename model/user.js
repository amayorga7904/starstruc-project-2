const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String
    },
    born: {
        type: Date
    }, 
    bio: {
        type: String
    }
}, {
    timestamps: true
})