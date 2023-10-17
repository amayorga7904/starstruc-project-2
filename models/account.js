const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema ({
    // name: {
    //     type: String
    // },
    content: {
        type: String 
    }
}, {
    timestamps:true
})

const accountSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  born: {
    type: Date
  },
  bio: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userAvatar: String, 
  messages: [messageSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Account', accountSchema);