const {
    db
} = require("./.config/firebase");
const express = require("express");
var session = require('express-session');
var cookieParser = require('cookie-parser')
const cors = require("cors");
const dotenv = require("dotenv")
dotenv.config()
const PORT = 5200 || process.env.PORT;
const app = express();
const fs  = require('fs')
const multer  = require('multer');


var storage = multer.diskStorage({
  destination: async (req, file, cb)=>{
      
        
      var newDestination="./public/image";
      if (!fs.existsSync(newDestination)){
          fs.mkdirSync(newDestination);
      }
      if (fs.existsSync("./public/image/temp.jpg"))
    {
      fs.unlinkSync("./public/image/temp.jpg")
    }
    
    cb(null, newDestination);
  }
  ,
  filename:  (req, file, cb) =>{
    
       cb(null, "temp.jpg")

    
  }
})
var upload = multer({ storage: storage })
app.use(cors());

app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret: 'netfliz',
    resave: false,
    saveUninitialized: true
}))
app.use(cookieParser('netfliz'));

const errorHandler=(err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode)
        .send(err.messages);
}


app.get("/", require("./controller/redirect.c"),errorHandler);
app.use("/users", require("./router/user.r"),errorHandler);
app.use("/videos", require("./router/video.r"),errorHandler);
app.use("/comments",require("./router/comments.r"),errorHandler);
app.use("/userinfo",require("./router/userinfo.r"),errorHandler);
app.get('/logout',(req,res,next)=>{
    console.log(req.body);
    try{
      req.session.uid=null;
      req.session.permission=null
      
    }
    catch(err){
      next(err)
    }
    res.send("<h1>Logout</h1>")
});
app.post('/imageUpload',upload.single('imageUpload'), async (req, res,next ) => {
  try {
    if (fs.existsSync("./public/image/temp.jpg")) {
        console.log("Upload Success");
        return res.status(200).send({
          messages:"success"
        })
    }
    else{
      return res.status(200).send({
        messages:"fail"
      })
    }

  }
  catch (err)
  {
    next(err);
  }
})


app.listen(PORT, () => console.log(`Server listening on port ${PORT}     visit on: http://127.0.0.1:${PORT}/ `))