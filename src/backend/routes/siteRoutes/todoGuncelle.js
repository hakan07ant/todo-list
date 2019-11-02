const todoModels = require.main.require('./db/todoModels')

const todoSil = async (req, res) => {
  const result = {
    success: false,
    data: {}
  }
  console.log(req.body.params.id)
  const id = req.body.params.id
  const yapildi = req.body.params.yapildi
  const updateTodo = await todoModels.updateOne({ _id: id }, { yapildi: yapildi })
  if (updateTodo) {
    result.success = true
    result.data = id
  } else {
    result.success = false
  }
  console.log(result)
  res.json(result)
}

module.exports = todoSil
