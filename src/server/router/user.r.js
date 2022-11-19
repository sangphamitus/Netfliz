const app =require('express');
const router=app.Router();
const userC= require("../controller/user.c");

router.post('/register', userC.registerUser);
router.post('/login', userC.loginUser);



module.exports =router