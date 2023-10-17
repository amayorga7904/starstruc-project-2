const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema ({
    // name: {
    //     type: String
    // },
    content: {
        type: String 
    },
   
}, {
    timestamps:true
})

const matchSchema = new Schema({
    content: String,
    
}, {
    timestamps: true
})

module.exports = mongoose.model('Match', matchSchema);