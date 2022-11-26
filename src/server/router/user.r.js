const app =require('express');
const router=app.Router();
const userC= require("../controller/user.c");

router.post('/register', userC.registerUser,()=>{next()});
router.post('/login', userC.loginUser,()=>{next()});



module.exports =router