const todoModels = require.main.require('./db/todoModels')

const todoSil = async (req, res) => {
  const result = {
    success: false,
    data: {}
  }
  const id = req.body.params.id
  const deleteTodo = await todoModels.deleteOne({ _id: id })
  if (deleteTodo) {
    result.success = true
    result.data = id
  } else {
    result.success = false
  }
  res.json(result)
}

module.exports = todoSil
