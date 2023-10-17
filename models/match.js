const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new Schema({
    content: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Match', matchSchema);