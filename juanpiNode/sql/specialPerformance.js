const mongoose = require("./db");
const Schema = mongoose.Schema;

// 精选专场
const specialPerformanceSchema = new Schema({
  goods_id: { type: String },
  shop_id: { type: String },
  title: { type: String },
  title_long: { type: String },
  oprice: { type: Number },
  cprice: { type: Number },
  start_time: { type: String },
  end_time: { type: String },
  time_left: { type: String },
  pic_url: { type: String }
});

module.exports = mongoose.model("specialPerformanceSchema", specialPerformance);