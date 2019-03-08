var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  todolist: { type: 'String', required: true },
});

module.exports = mongoose.model('Post', postSchema);
