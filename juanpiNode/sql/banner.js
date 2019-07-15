const mongoose = require("./db");
const Schema = mongoose.Schema;

// 轮播图
const BannerSchema = new Schema({
  id: { type: Number },
  pic: { type: String }
});

module.exports = mongoose.model("Banner", BannerSchema);