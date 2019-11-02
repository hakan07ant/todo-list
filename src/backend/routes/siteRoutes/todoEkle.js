const todoModels = require.main.require('./db/todoModels')
const todoEkle = async (req, res) => {
  const result = {
    success: false,
    valid: {}
  }
  const todo = req.body.todo
  const yapildi = false
  newtodoModels = new todoModels({
    todo: todo,
    yapildi: yapildi
  })
  const add = await newtodoModels.save()
  if (add) {
    result.success = true
    result.valid.id = add._id
    result.valid.todo = todo
    result.valid.yapildi = yapildi
    result.valid.mesaj = 'İşlem Başarılı'
    // console.log(add)
  } else {
    result.success = false
    result.valid.mesaj = 'İşlem Hatalı'
    // console.log('Hata')
  }
  // console.log(result)
  res.json(result)
}

module.exports = todoEkle
