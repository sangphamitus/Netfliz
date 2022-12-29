const videoM = require('../models/video.m')
const fs = require('fs')
module.exports = {
  addVideo: async (req, res, next) => {
    try {
      const {
        link,
        name,
        image,
        ratting,
        haveEp,
        review,
        type,
        uid,
        time,
      } = req.body

      console.log(req.body)

      const rs = await videoM.addVideo({
        link,
        name,
        image,
        ratting,
        haveEp,
        review,
        type,
        uid,
        time,
      })

      if (rs == null) {
        res.status(200).send({
          data: rs,
          message: 'unavailable video',
        })
      } else {
        res.status(200).send({
          data: rs,
          message: 'success',
        })
      }
      if (fs.existsSync('./public/image/temp.jpg')) {
        fs.unlinkSync('./public/image/temp.jpg')
      }
    } catch (err) {
      console.log(err)
      next(err)
    }
  },
  allVideos: async (req, res, next) => {
    try {
      const rs = await videoM.allVideos()

      if (rs == null) {
        res.status(200).send({
          data: rs,
          message: 'available video',
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
  getVideo: async (req, res, next) => {
    try {
      const { vid } = req.body

      const rs = await videoM.getVideo(vid)

      if (rs == null) {
        res.status(200).send({
          data: rs,
          message: 'available video',
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
  getNewVideo: async (req, res, next) => {
    try {
      const rs = await videoM.getNewVideo(6)

      if (rs == null) {
        res.status(200).send({
          data: rs,
          message: 'available video',
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
  getHotVideo: async (req, res, next) => {
    try {
      const rs = await videoM.getHotVideo(6)

      if (rs == null) {
        res.status(200).send({
          data: rs,
          message: 'available video',
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
  getFilterVideo: async (req, res, next) => {
    try {
      const { type } = req.body
      const spliter = type.split(',')
      console.log(spliter)
      const rs = await videoM.getFilterVideo(spliter)
      console.log(rs)
      if (rs == null) {
        res.status(200).send({
          data: rs,
          message: 'unavailable video',
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
  getSearchVideo: async (req, res, next) => {
    try {
      console.log(req.body)
      const { name } = req.body
      const rs = await videoM.getSearchVideo(name)
      console.log(rs)
      if (rs == null) {
        res.status(200).send({
          data: rs,
          message: 'unavailable video',
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
  createEpisode: async (req, res, next) => {
    try {
      const { name } = req.body
      const rs = await videoM.createEpisode(name)

      if (rs == null) {
        res.status(200).send({
          data: rs,
          message: 'fail',
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
  addToEpisode: async (req, res, next) => {
    try {
      const { eid, vid } = req.body
      const rs = await videoM.addToEpisode(eid, vid)

      if (rs == null) {
        res.status(200).send({
          data: rs,
          message: 'unavailable video',
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
  getEpisode: async (req, res, next) => {
    try {
      const { eid } = req.body
      const rs = await videoM.getEpisode(eid)

      if (rs == null) {
        res.status(200).send({
          data: rs,
          message: 'unavailable video',
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
  getAllEpisode: async (req, res, next) => {
    try {
      const rs = await videoM.getAllEpisode()

      console.log(rs)
      if (rs == null) {
        res.status(200).send({
          data: rs,
          message: 'unavailable video',
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
  changeVideo: async (req, res, next) => {
    try {
      const {
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
      } = req.body

      const rs = await videoM.changeMovieInfo({
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
      })

      console.log(rs)
      if (rs == null) {
        res.status(200).send({
          data: rs,
          message: 'unavailable video',
        })
      } else {
        res.status(200).send({
          data: rs,
          message: 'success',
        })
      }
      if (fs.existsSync('./public/image/temp.jpg')) {
        fs.unlinkSync('./public/image/temp.jpg')
      }
    } catch (err) {
      console.log(err)
      next(err)
    }
  },
  deleteFolderRecursive: (path) => {
    if (fs.existsSync(path)) {
      fs.readdirSync(path).forEach(function (file, index) {
        var curPath = path + '/' + file
        if (fs.lstatSync(curPath).isDirectory()) {
          // recurse
          deleteFolderRecursive(curPath)
        } else {
          // delete file
          fs.unlinkSync(curPath)
        }
      })
      fs.rmdirSync(path)
    }
  },
  deleteVideo: async (req, res, next) => {
    try {
      const { vid } = req.body
      const rs = await videoM.deleteVideo({ vid })

      if (rs === false) {
        res.status(200).send({
          message: 'fail',
        })
      } else {
        if (deleteFolderRecursive('./public/image/' + vid)) {
          deleteFolderRecursive('./public/image/' + vid)
        }

        res.status(200).send({
          message: 'success',
        })
      }
    } catch (err) {
      console.log(err)
      next(err)
    }
  },
}
