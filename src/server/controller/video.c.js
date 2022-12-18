const videoM = require("../models/video.m");

module.exports={
    addVideo:async (req, res, next) => {
        try {
            const {
                name,
                url,
                image,
                ratting
            } = req.body;
        
            
            console.log(`${name},${url}`)
            const rs = await videoM.addVideo(name,url,image,ratting);
            console.log(rs);
            if (rs == null) {
                res.status(200).send({
                    data: rs,
                    message: "available video"
                });
            } else {
                res.status(200).send({
                    data: rs,
                    message: "success"
                });

            }
            
        } catch (err) {
            console.log(err);
            next(err);
        }
    }, 
    allVideos:async (req, res, next) => {
        try {
  
            const rs = await videoM.allVideos();
            console.log(rs);
            if (rs == null) {
                res.status(200).send({
                    data: rs,
                    message: "available video"
                });
            } else {
                res.status(200).send({
                    data: rs,
                    message: "success"
                });

            }
            
        } catch (err) {
            console.log(err);
            next(err);
        }
    },
    getVideo:async (req, res, next) => {
        try {
            console.log(req.body);
            const {vid}=req.body;
           
            const rs = await videoM.getVideo(vid);
     
            if (rs == null) {
                res.status(200).send({
                    data: rs,
                    message: "available video"
                });
            } else {
                res.status(200).send({
                    data: rs,
                    message: "success"
                });

            }
            
        } catch (err) {
            console.log(err);
            next(err);
        }
    },
    getNewVideo:async (req, res, next)=> {
        try {
  
            const rs = await videoM.getNewVideo(6);
            console.log(rs);
            if (rs == null) {
                res.status(200).send({
                    data: rs,
                    message: "available video"
                });
            } else {
                res.status(200).send({
                    data: rs,
                    message: "success"
                });

            }
            
        } catch (err) {
            console.log(err);
            next(err);
        }
    },
    getHotVideo:async (req, res, next)=> {
        try {
  
            const rs = await videoM.getHotVideo(6);
            console.log(rs);
            if (rs == null) {
                res.status(200).send({
                    data: rs,
                    message: "available video"
                });
            } else {
                res.status(200).send({
                    data: rs,
                    message: "success"
                });

            }
            
        } catch (err) {
            console.log(err);
            next(err);
        }
    },
    getFilterVideo:async(req,res,next)=>{
        try {
            const {type}=req.query;
            console.log(req.query);
            const spliter= type.split(',');
            const rs = await videoM.getFilterVideo(spliter);
            console.log(rs);
            if (rs == null) {
                res.status(200).send({
                    data: rs,
                    message: "unavailable video"
                });
            } else {
                res.status(200).send({
                    data: rs,
                    message: "success"
                });

            }
            
        } catch (err) {
            console.log(err);
            next(err);
        } 
    },
    getSearchVideo:async(req,res,next)=>{
        try {
            const {key}=req.query;
            const rs = await videoM.getSearchVideo(key);
            console.log(rs);
            if (rs == null) {
                res.status(200).send({
                    data: rs,
                    message: "unavailable video"
                });
            } else {
                res.status(200).send({
                    data: rs,
                    message: "success"
                });

            }
            
        } catch (err) {
            console.log(err);
            next(err);
        } 
    }
}