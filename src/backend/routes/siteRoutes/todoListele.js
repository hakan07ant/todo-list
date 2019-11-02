const todoModels = require.main.require('./db/todoModels')

const todoListele = async (req, res) => {
  const result = {
    success: false,
    data: {}
  }
  const list = await todoModels.find()
  if (list) {
    result.success = true
    result.data = list
  } else {
    result.success = false
  }
  console.log(result)
  res.json(result)
}

module.exports = todoListele
