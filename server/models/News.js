const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  title_en: { type: String, default: '' },
  text: { type: String, required: true },
  text_en: { type: String, default: '' },
  imageUrl: { type: String, default: '' },
  date: { type: Date, default: Date.now },
  isMainNews: { type: Boolean, default: false }
});

module.exports = mongoose.model('News', newsSchema);