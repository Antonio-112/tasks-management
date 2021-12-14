const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  name: {
    type: String,
    required: true,
    maxlength: 100,
  },
  lastname: {
    type: String,
    required: true,
    maxlength: 100,
  },
  role: {
    type: String,
    default: 'subscriber',
  },
  image: {
    type: String,
    default: 'default.jpg',
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
  collections: [{
    type: ObjectId,
    ref: 'Collection',
  }],
},
{
  timestamps: true,
});

module.exports = mongoose.model('User', userSchema);
