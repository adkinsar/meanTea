const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teaSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  unit: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: false
  },
  price: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Tea', teaSchema);