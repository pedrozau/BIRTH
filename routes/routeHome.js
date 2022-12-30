const router = require('express').Router() 
const {HomeController} = require('../controller/HomeController')


router.route('/').get(HomeController)


module.exports = router 
