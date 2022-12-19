const commentM = require('../models/comments.m');

module.exports = {
    post:async(req,res,next)=>  
    {
        
        try{
            console.log(req.header)
            let {vid,cid,username,content} = req.body;
           // const username=req.session.username;
    
            if(cid===undefined) cid= null;
            const rs=await commentM.addComment({vid,cid,username,content});
            const data=await commentM.getComment({vid});
            res.status(200).send(
                {
                    data:data,
                    messages:'post succeed'
                }
            )
        }
        catch(err)
        {
            next(err);
        }
    },
    getpost:async(req,res,next)=>  
    {
        
        try{
            let {vid} = req.body;

        
            const data=await commentM.getComment({vid});
         
            res.status(200).send(
                {
                    data:data,
                    messages:'post succeed'
                }
            )
        }
        catch(err)
        {
            next(err);
        }
    },
}