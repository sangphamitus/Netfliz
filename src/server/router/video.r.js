const app =require('express');
const router=app.Router();
const videoC= require("../controller/video.c");


router.post('/',videoC.allVideos);
router.post('/add', videoC.addVideo);
router.get('/watch',videoC.getVideo);


module.exports =router