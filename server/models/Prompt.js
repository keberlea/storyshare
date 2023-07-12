const { Schema, model } = require('mongoose');

const promptSchema = new Schema({
  description: {
    type: String,
    required: true,
    trim: true,
  },
});

const Prompt = model('Prompt', promptSchema);

module.exports = Prompt;
