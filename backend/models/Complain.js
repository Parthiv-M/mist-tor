const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComplainSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  //whatever the complain is
  complainText: {
    type: String,
    required: true
  },
  //date of registration
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Complain = mongoose.model('complain', ComplainSchema);
