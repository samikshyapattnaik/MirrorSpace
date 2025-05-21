const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  displayName: String,
  email: { type: String, required: true },
  photo: String
});

module.exports = mongoose.model('Auth', userSchema);
