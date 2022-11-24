const app =require('express');
const router=app.Router();
const videoC= require("../controller/video.c");


router.post('/',videoC.allVideos);
router.post('/add', videoC.addVideo);
router.post('/new', videoC.getNewVideo);
router.post('/hot', videoC.getHotVideo);
router.get('/watch',videoC.getVideo);


module.exports =router