const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/JuanPiShopping';

mongoose.connect(DB_URL, { useNewUrlParser: true});

mongoose.connection.on("connected", () => console.log("连接成功"));
mongoose.connection.on("disconnected", () => console.log("断开连接"));
mongoose.connection.on("error", () => console.log("连接失败"));

// 暴露模块 CommenJS 规范
module.exports = mongoose;