const commentM = require('../models/comments.m')
const userinfoM = require('../models/userinfo.m')

module.exports = {
  post: async (req, res, next) => {
    try {
      let { vid, cid, uid, content } = req.body
      // const username=req.session.username;

      if (cid === undefined) cid = null
      const rs = await commentM.addComment({ vid, cid, uid, content })
      const data = await commentM.getComment({ vid })

      const time = data.map(async (each) => {
        const kal = each.data.map(async (item) => {
          const nameUser = await userinfoM.getUserinfo(item)
          const { name } = nameUser
          return { ...item, name }
        })

        const real = await Promise.all(kal)

        return { ...each, data: real }
      })
      var cmt = await Promise.all(time)
      cmt.sort((a, b) => b.data[0].timeStamp - a.data[0].timeStamp)
      cmt.forEach((Element) => console.log(Element.data[0].timeStamp))
      res.status(200).send({
        data: cmt,
        messages: 'post succeed',
      })
    } catch (err) {
      next(err)
    }
  },
  getpost: async (req, res, next) => {
    try {
      let { vid } = req.body

      const data = await commentM.getComment({ vid })

      const time = data.map(async (each) => {
        const kal = each.data.map(async (item) => {
          const nameUser = await userinfoM.getUserinfo(item)
          const { name } = nameUser
          return { ...item, name }
        })

        const real = await Promise.all(kal)

        return { ...each, data: real }
      })
      var cmt = await Promise.all(time)
      cmt.sort((a, b) => b.data[0].timeStamp - a.data[0].timeStamp)
      cmt.forEach((Element) => console.log(Element.data[0].timeStamp))

      res.status(200).send({
        data: cmt,
        messages: 'post succeed',
      })
    } catch (err) {
      next(err)
    }
  },
}
