const mongoose = require('./db');
const { Schema } = mongoose;

const BannerSchema = new Schema({
  id: { type: Number },
  pic: { type: String }
})

module.exports = mongoose.model('banner', BannerSchema,"banner");