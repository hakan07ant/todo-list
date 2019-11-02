const path = require('path')
const express = require('express')
const session = require('express-session')

const router = express.Router()
router.use(express.json())
router.use(express.static(path.join(__dirname, '..', '..', '..', 'dist')))

router.get('*', require('./siteRoutes/getAll'))
router.post('/todo-ekle', require('./siteRoutes/todoEkle'))
router.post('/todo-guncelle', require('./siteRoutes/todoGuncelle'))
router.post('/todo-listele', require('./siteRoutes/todoListele'))
router.post('/todo-sil', require('./siteRoutes/todoSil'))
module.exports = router
