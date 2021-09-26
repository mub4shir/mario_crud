const mongoose = require('mongoose');

const marioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add name'],
    unique: true,
    trim: true,
    maxlength: [15, 'Name can not be more than 15 characters'],
  },
  weight: {
    type: Number,
    required: [true, 'Please add weight'],
  },

  //   name: String,
  //   weight: Number,
});

module.exports = mongoose.model('Mario', marioSchema);
