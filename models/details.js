const mongoose = require('mongoose');

const Schema =mongoose.Schema;

const detailSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    date_of_birth: { type: String, required: true },
    school: { type: String, required: true }
  }, {
    timestamps: true,
  });

  const details = mongoose.model('details',detailSchema);

  module.exports = {details};