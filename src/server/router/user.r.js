const app = require('express')
const router = app.Router()
const userC = require('../controller/user.c')

router.post('/register', userC.registerUser, () => {
  next()
})
router.post('/login', userC.loginUser, () => {
  next()
})
router.post('/authen', userC.userAuthentication, () => {
  next()
})
router.post('/changePass', userC.changePassword, () => {
  next()
})
router.post('/getUser', userC.getUser, () => {
  next()
})

router.post('/changePermission', userC.changePermission, () => {
  next()
})
module.exports = router
