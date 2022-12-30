const userM = require('../models/user.m')
const CryptoJS = require('crypto-js')
const hashLength = 64
const { getClient, db } = require('../.config/postgres')

module.exports = {
  registerUser: async (req, res, next) => {
    try {
      const { username, password, email, permission } = req.body
      const salt = username
      const pwSalt = password + salt

      const hashedPassword = CryptoJS.SHA256(pwSalt, {
        outputLength: hashLength * 4,
      }).toString(CryptoJS.enc.Hex)

      console.log(username, hashedPassword, email, permission)
      const rs = await userM.registerUser(
        username,
        hashedPassword,
        email,
        permission,
      )
      console.log(rs)
      if (rs == false) {
        res.status(200).send({
          data: rs,
          message: 'valid username',
        })
      } else {
        res.status(200).send({
          data: rs,
          message: 'success',
        })
      }
    } catch (err) {
      console.log(err)
      next(err)
    }
  },
  loginUser: async (req, res, next) => {
    try {
      console.log(req.body)
      const { username, password } = req.body
      const salt = username
      const pwSalt = password + salt

      const hashedPassword = CryptoJS.SHA256(pwSalt, {
        outputLength: hashLength * 4,
      }).toString(CryptoJS.enc.Hex)

      const rs = await userM.loginUser(username, hashedPassword)

      if (!rs) {
        res.status(200).send({
          data: rs,
          message: 'Invalid username or password',
        })
        return
      }
      const user = rs
      // if (req.body.remember=="true") {
      //     var hour = 3600000;
      //     req.session.cookie.maxAge = 14 * 24 * hour; //2 weeks
      // } else {
      //     req.session.cookie.expires = false;
      // }
      // req.session.regenerate(function (err) {
      //     if (err) next(err)

      //     req.session.uid = user.uid;
      //     req.session.username=username;
      //     req.session.permission = user.permission;

      // req.session.save(function (err) {
      //     if (err) return next(err)

      res.status(200).send({
        data: user.uid,
        permission: user.permission,
        message: 'success',
      })

      // })
      // })
    } catch (err) {
      console.log(err)
      next(err)
    }
  },
  userAuthentication: async (req, res, next) => {
    //console.log(req.session);
    try {
      console.log(req.headers)
      const { uid } = req.headers
      if (uid != null) {
        const rs = await userM.checkAuthen(uid)
        console.log(rs)

        res.status(200).send({
          permission: rs.permission,
        })
      } else {
        res.redirect('/')
      }
    } catch (e) {
      res.redirect('/')
    }
  },
  changePassword: async (req, res, next) => {
    try {
      console.log(req.body)
      const { uid, password, newpassword } = req.body

      const rs = await userM.changePassword({ uid, password, newpassword })
      console.log(rs)

      res.status(200).send({
        result: rs,
      })
    } catch (err) {
      console.log(err)
      next(err)
    }
  },
  getUser: async (req, res, next) => {
    try {
      const { uid } = req.body

      const rs = await userM.getUser({ uid })
      console.log(rs)

      res.status(200).send({
        data: rs,
        message: 'success',
      })
    } catch (err) {
      console.log(err)
      next(err)
    }
  },
  changePermission: async (req, res, next) => {
    try {
      const { changePermission, username, password } = req.body

      const salt = username
      const pwSalt = password + salt

      const hashedPassword = CryptoJS.SHA256(pwSalt, {
        outputLength: hashLength * 4,
      }).toString(CryptoJS.enc.Hex)

      const rs = await userM.loginUser(username, hashedPassword)
      console.log(rs)
      let change = false
      const reg = await userM.getUser({ uid: rs.uid })
      if (rs.permission) {
        change = await userM.changePermission({ listUid: changePermission })
      }

      if (change) {
        res.status(200).send({
          data: reg,
          message: 'success',
        })
      } else {
        res.status(200).send({
          message: 'failed',
        })
      }
    } catch (err) {
      console.log(err)
      next(err)
    }
  },
}
