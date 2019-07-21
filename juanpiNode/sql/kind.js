const mongoose = require('./db');
const { Schema } = mongoose;

const  kindSchema = new Schema({
  title: { type : String },
  img: { type : String },
  womenDress: { type : Object }
});

module.exports = mongoose.model('kind', kindSchema, 'kind');
