const mongoose = require('./db')
const { Schema } = mongoose

const singleProductSchema = new Schema({
  goods_id: { type: Number },
  shop_id: { type: Number },
  title: { type: String },
  title_long: { type: String },
  oprice: { type: String },
  cprice: { type: String },
  time_left: { type: String },
  pic_url: { type: String },
  corner: { type: String },
  goods_jump_url: { type: String },
  leftText: { type: String },
  rightText: { type: String }
})

module.exports = mongoose.model('singleProduct', singleProductSchema, 'singleProduct')