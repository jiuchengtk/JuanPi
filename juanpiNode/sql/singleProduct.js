const mongoose = require("./db");
const Schema = mongoose.Schema;

// 精选单品
const SingleProductSchema = new Schema({
  goods_id: { type: String },
  shop_id: { type: String },
  title: { type: String },
  title_long: { type: String },
  oprice: { type: Number },
  cprice: { type: Number },
  start_time: {type: String },
  end_time: { type: String },
  time_left: { type: String },
  pic_url: { type: String }
})

// 暴露模块
module.exports = mongoose.model("SingleProduct", SingleProductSchema);