const mongoose = require("mongoose");

const JournalSchema = new mongoose.Schema({
  entry: {
    type: String,
  },
  date: {
    type: Date,
  },
});

module.exports = mongoose.model("Journal", JournalSchema);
