const { fdb } = require('../.config/firebase')

const queryDB = require('../.config/postgres')
const CryptoJS = require('crypto-js')
const { getClient, db } = require('../.config/postgres')
const fs = require('fs')
module.exports = {
  addVideo: async ({
    link,
    name,
    image,
    ratting,
    haveEp,
    review,
    type,
    uid,
    time,
  }) => {
    const vid = CryptoJS.SHA256(link, {
      outputLength: 10,
    })
      .toString(CryptoJS.enc.Hex)
      .slice(0, 10)
    var rs = await db.any(
      `select * from public.\"Videos\" where \"vid\" like '${vid}'`,
    )
    if (rs.length == 0) {
      if (fs.existsSync('./public/image/temp.jpg')) {
        var newDestination = './public/image/' + vid + '/'
        var oldPath = './public/image/temp.jpg'
        var newPath = newDestination + 'main.jpg'
        if (!fs.existsSync(newDestination)) {
          fs.mkdirSync(newDestination)
        }

        fs.rename(oldPath, newPath, function (err) {
          if (err) throw err
          console.log('Successfully renamed')
        })
      }

      db.any(
        `insert into  public.\"Videos\"(\"vid\",\"link\",\"name\",\"haveEp\",\"review\",\"type\",\"image\",\"ratting\",\"uid\",\"time\") 
                VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
        [
          vid,
          link,
          name,
          haveEp,
          review,
          type,
          'image/' + vid + '/main.jpg',
          ratting,
          uid,
          time,
        ],
      )

      var ress = await db.one(
        `select * from public.\"Videos\" where \"vid\" like '${vid}'`,
      )

      return ress
    } else {
      console.log('Video trung khop')
      return null
    }
  },
  allVideos: async () => {
    var client = db

    var rs = await db.any(`select * from public.\"Videos\"`)

    return rs
  },
  getVideo: async (vid) => {
    var client = db

    var rs = await db.one(
      `select * from public.\"Videos\" where \"vid\" like '${vid}'`,
    )

    return rs
  },
  getNewVideo: async (number) => {
    var client = db

    var rs = await db.any(`SELECT * FROM public."Videos"
         Limit ${number}`)
    if (rs.length == 0) {
      return null
    } else {
      return rs
    }
  },
  getHotVideo: async (number) => {
    var client = db

    var rs = await db.any(`SELECT * FROM public."Videos"
         ORDER BY  ratting DESC
         Limit ${number}`)

    if (rs.length == 0) {
      return null
    } else {
      return rs
    }
  },
  getFilterVideo: async (filter) => {
    var client = db
    let query = `SELECT * 
        FROM public."Videos"
        Where `

    let first = true
    filter.forEach((element) => {
      if (element != '') {
        if (first != true) {
          query += `and `
        }
        if (first === true) first = false
        query += `"type" like '%${element}%' `
      }
    })

    console.log(query)
    var rs = await db.any(query)
    if (rs.length == 0) {
      return null
    } else {
      return rs
    }
  },
  getSearchVideo: async (key) => {
    var client = db
    let query = `SELECT * 
        FROM public."Videos"
        WHERE LOWER("name") like  LOWER(N'%${key}%')  `

    console.log(query)
    var rs = await db.any(query)
    if (rs.length == 0) {
      return null
    } else {
      return rs
    }
  },
  createEpisode: async (name) => {
    const eid = CryptoJS.SHA256(name + new Date().toUTCString(), {
      outputLength: 10,
    })
      .toString(CryptoJS.enc.Hex)
      .slice(0, 10)
    const id = CryptoJS.SHA256(new Date().toUTCString(), {
      outputLength: 10,
    })
      .toString(CryptoJS.enc.Hex)
      .slice(0, 10)
    let query = ''
    query = `insert into  public.\"Episode\"(\"id\",\"eid\",\"collectionName\") 
             VALUES ('${id}','${eid}','${name}')`
    db.any(query)

    return eid
  },
  addToEpisode: async (eid, vid) => {
    query = `UPDATE public."Videos"
       SET "haveEp"= '${eid}'
       WHERE "vid"= '${vid}'
       returning*;`

    const rs = await db.any(query)
    return rs
  },
  getEpisode: async (eid) => {
    let query = `SELECT *
        FROM public."Videos"
        WHERE "haveEp" = '${eid}'`

    const rs = db.any(query)
    return rs
  },
  getAllEpisode: async () => {
    let query = `SELECT *
        FROM public."Episode"
    `

    const rs = db.any(query)
    return rs
  },
  changeMovieInfo: async ({
    vid,
    link,
    name,
    image,
    ratting,
    haveEp,
    review,
    type,
    uid,
    time,
  }) => {
    db.any(
      `UPDATE public."Videos"
        SET "link"=$2, "name"=$3, "image"=$4, "ratting"=$5, "haveEp"=$6, "review"=$7, "type"=$8,"uid"=$9,"time"=$10
        WHERE "vid" like $1`,
      [
        vid,
        link,
        name,
        'image/' + vid + '/main.jpg',
        ratting,
        haveEp,
        review,
        type,
        uid,
        time,
      ],
    )
    if (fs.existsSync('./public/image/temp.jpg')) {
      var newDestination = './public/image/' + vid + '/'
      var oldPath = './public/image/temp.jpg'
      var newPath = newDestination + 'main.jpg'
      if (!fs.existsSync(newDestination)) {
        fs.mkdirSync(newDestination)
      }

      fs.rename(oldPath, newPath, function (err) {
        if (err) throw err
        console.log('Successfully renamed')
      })
    }
    var ress = await db.one(
      `select * from public.\"Videos\" where \"vid\" like '${vid}'`,
    )

    return ress
  },
  deleteVideo: async({vid})=>
  {
    try
    {
      db.any(`DELETE FROM public."Videos"
      WHERE "vid" like $1`,[vid]);
      return true;
    }
    catch(e)
    {
      return false;
    }    

  }
}
