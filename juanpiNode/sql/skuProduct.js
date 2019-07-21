const mongoose = require('./db');
const { Schema } = mongoose;

const skuProductSchema = new Schema({
  goods_id: { type: Number },
  shop_id: { type: Number },
  img1: { type: String },
  img2: { type: String },
  img3: { type: String },
  img4: { type: String },
  img5: { type: String }
})

module.exports = mongoose.model('skuProduct', skuProductSchema, 'skuProduct');