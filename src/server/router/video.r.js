const app = require('express')
const router = app.Router()
const videoC = require('../controller/video.c')

router.post('/', videoC.allVideos, () => {
  next()
})
router.post('/add', videoC.addVideo, () => {
  next()
})
router.post('/new', videoC.getNewVideo, () => {
  next()
})
router.post('/hot', videoC.getHotVideo, () => {
  next()
})
router.post('/get', videoC.getVideo, () => {
  next()
})
router.post('/getall', videoC.allVideos, () => {
  next()
})
router.post('/filter', videoC.getFilterVideo, () => {
  next()
})
router.post('/search', videoC.getSearchVideo, () => {
  next()
})
router.post('/createEp', videoC.createEpisode, () => {
  next()
})
router.post('/addEp', videoC.addToEpisode, () => {
  next()
})
router.post('/getEp', videoC.getEpisode, () => {
  next()
})
router.post('/getAllEp', videoC.getAllEpisode, () => {
  next()
})
router.post('/changeVideo', videoC.changeVideo, () => {
  next()
})
router.post('/deleteVideo', videoC.deleteVideo, () => {
  next()
})
module.exports = router
