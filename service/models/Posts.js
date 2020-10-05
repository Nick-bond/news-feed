const { Schema, model } = require('mongoose');

const schema = new Schema({
  title: { type: String },
  text: { type: String },
  id: {type: String},
});

module.exports = model('Posts', schema);
