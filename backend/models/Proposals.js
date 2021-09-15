const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProposalSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  //whatever the proposal is
  proposaltext: {
    type: String,
    required: true
  },
  //date of registration
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Proposal = mongoose.model('proposal', ProposalSchema);
