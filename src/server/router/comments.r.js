const app =require('express');
const router=app.Router();
const commentC= require('../controller/comment.c')

router.post('/post', commentC.post,()=>{next()});
router.post('/getpost', commentC.getpost,()=>{next()});


module.exports =router