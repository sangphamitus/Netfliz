const videoM = require("../models/video.m");

module.exports={
    addVideo:async (req, res, next) => {
        try {
            const {
                name,
                url
            } = req.body;
            

            console.log(`${name},${url}`)
            const rs = await videoM.addVideo(name,url);
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
            const {vid}=req.query;
            console.log(req.query);
            const rs = await videoM.getVideo(vid);
     
            if (rs == null) {
                res.send(`<h1>Link not avalable</h1>`)
            } else {
                res.send(`<div>
               <div >
               <iframe width="1060" height="615" src="${rs.link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              
                </div>
                <h1>${rs.name}</h1>
                </div>`)

            }
            
        } catch (err) {
            console.log(err);
            next(err);
        }
    }
}