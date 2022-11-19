const e = require('express');
const app =require('express');
const router=app.Router();
const userC= require("../controller/user.c");

router.get('/', userC.userAuthentication,(req,res,next)=>{
    if(req.session.permission) 
    {
        res.send(`<h1>Admin</h1>
            <form action="/logout" method="get">
            <button type="submit">logout</button> </form>`)
    }
    else{
        res.send(`<h1>Client</h1>
        <form action="/logout" method="get">
        <button type="submit">logout</button> </form>`)
    }
    
});


module.exports =router