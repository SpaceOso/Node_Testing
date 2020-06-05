const mongoose = require("mongoose");

const EngineerSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  yearsExperience: Number,
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("EngineerSchema");
