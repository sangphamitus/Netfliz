const app =require('express');
const router=app.Router();
const videoC= require("../controller/video.c");


router.post('/',videoC.allVideos,()=>{next()});
router.post('/add', videoC.addVideo,()=>{next()});
router.post('/new', videoC.getNewVideo,()=>{next()});
router.post('/hot', videoC.getHotVideo,()=>{next()});
router.get('/watch',videoC.getVideo,()=>{next()});


module.exports =router