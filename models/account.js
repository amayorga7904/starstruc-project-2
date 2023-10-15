const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  born: Date,
  bio: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Account', accountSchema);