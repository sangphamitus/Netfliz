const app =require('express');
const router=app.Router();
const userInfoC= require('../controller/userinfo.c')

router.post('/add', userInfoC.addNewUserinfo,()=>{next()});
router.post('/get',userInfoC.getNewUserinfo,()=>{next()});
router.post('/addMovie',userInfoC.addMovieToInfo,()=>{next()});


module.exports =router