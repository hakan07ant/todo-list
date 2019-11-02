const mongoose = require('mongoose')

const Schema = mongoose.Schema

const todoSchema = new Schema({
  todo: String,
  yapildi: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = todo
