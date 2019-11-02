const models = require('./models')

// Arama Yapmak ve sorgulamak için kullanılıyor
const sorgu = (opts) => {
  return new Promise((resolve, reject) => {
    const Model = models[opts.model]
    console.log(Model)
    Model.find(opts.find, opts.select, (err, items) => {
      if (err) {
        const error = {
          code: 2,
          message: 'Database Hata',
          detail: err
        }
        reject(error)
      } else {
        const itemsMap = {}

        items.forEach((item, i) => {
          itemsMap[i] = item
        })

        resolve(itemsMap)
      }
    })
      .sort(opts.sort)
      .limit(opts.limit)
      .skip(opts.skip)
  })
}

module.exports = sorgu
