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
        
            
           
            const rs = await videoM.addVideo(name,url,image,ratting);
           
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
            console.log(req.body)
            const {name}=req.body;
            const rs = await videoM.getSearchVideo(name);
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
    createEpisode:async(req,res,next)=>{

        try {
          
            const {name}=req.body;
            const rs = await videoM.createEpisode(name);
          
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
    addToEpisode:async(req,res,next)=>{

        try {
          
            const {eid,vid}=req.body;
            const rs = await videoM.addToEpisode(eid,vid);
          
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
    getEpisode:async(req,res,next)=>{

        try {
          
            const {eid}=req.body;
            const rs = await videoM.getEpisode(eid)
          
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