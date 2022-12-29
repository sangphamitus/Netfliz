const { fdb } = require('../.config/firebase')

const queryDB = require('../.config/postgres')
const CryptoJS = require('crypto-js')
const { getClient, db } = require('../.config/postgres')
const hashLength = 64
const userinfoM = require('./userinfo.m')
module.exports = {
  registerUser: async (username, password, email, permission) => {
    var client = db

    var rs = await db.any(
      `select * from public.\"Users\" where \"username\" like '${username}' or \"email\" like '${username}'`,
    )

    if (rs.length == 0) {
      const hashedUsername = CryptoJS.SHA256(username, {
        outputLength: 10,
      }).toString(CryptoJS.enc.Hex)
      console.log(hashedUsername.slice(0, 11))
      let query = `insert into  public.\"Users\"(\"uid\",\"username\", \"password\",\"email\",\"permission\") 
            VALUES ('${hashedUsername.slice(
              0,
              11,
            )}', '${username}', '${password}', '${email}', ${permission}) `
      console.log(query)
      userinfoM.addNewUserinfo({ uid: hashedUsername.slice(0, 11) })
      rs = await db.any(query)
      return true
    }
    return false
  },
  loginUser: async (username, password) => {
    var client = db

    var rs = await db.any(
      `select * from public.\"Users\" where \"username\" like '${username}' and \"password\" like '${password}'`,
    )
    if (rs.length == 0) {
      rs = await db.any(
        `select * from public.\"Users\" where \"email\" like '${username}' and \"password\" like '${password}'`,
      )
      if (rs.length == 0) {
        return null
      }
      return rs
    }

    return rs[0]
  },
  validUID: async (uid) => {
    var client = db

    var rs = await db.any(
      `select * from public.\"Users\" where \"uid\" like '${uid}' `,
    )

    if (rs.length == 0) {
      return false
    } else {
      return true
    }
  },
  checkAuthen: async (uid) => {
    var rs = await db.one(
      `select * from public.\"Users\" where \"uid\" like '${uid}' `,
    )

    return rs
  },
  changePassword: async ({ uid, password, newpassword }) => {
    var rs = await db.one(
      `select * from public.\"Users\" where \"uid\" like '${uid}' `,
    )
    console.log(rs)

    try {
      const salt = rs.username

      const hashedPassword = CryptoJS.SHA256(password + salt, {
        outputLength: hashLength * 4,
      }).toString(CryptoJS.enc.Hex)

      const hashedPasswordVer2 = CryptoJS.SHA256(newpassword + salt, {
        outputLength: hashLength * 4,
      }).toString(CryptoJS.enc.Hex)
      var rs = await db.any(
        `UPDATE public."Users"
            SET "password"=$3
            WHERE "uid" like $1 and "password" like $2 `,
        [uid, hashedPassword, hashedPasswordVer2],
      )
    } catch (e) {
      return false
    }

    return true
  },

  getUser: async ({ uid }) => {
    var rs = await db.any(
      `select * from public.\"Users\" where \"uid\" not like '${uid}' `,
    )
    console.log(rs)

    return rs
  },
}
