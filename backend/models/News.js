const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  // the main text of the news
  article: {
    type: String,
    required: true
  },
  // the image associated with the article
  articleImage: {
    type: URL
  },
  //headline of the article
  headline: {
    type: String,
    unique: true,
    required: true
  },
  // Writer of the article, to be picked from the user database, automated on submission
  author: {
    type: String,
    required: true
  },
  // the link to the original article
  sourcelink: {
    type: URL
  },
  // name of the website the news was picked from
  source: {
    type: String
  },
  // homepage of the source website
  sourcehome: {
    type: URL
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = News = mongoose.model('news', NewsSchema);
