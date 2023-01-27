const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide title']
  },
  content: {
    type: String,
    required: [true, 'Please provide content']
  }
});

const Note = mongoose.model('note', noteSchema);
module.exports = Note;
