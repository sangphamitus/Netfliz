const userInfoM = require('../models/userinfo.m');

module.exports= 
{
    addNewUserinfo: async(req,res,next)=>{
        try{
           const {uid}=req.body;

           const rs  =await userInfoM.addNewUserinfo({uid});
           res.status(200).send(
            {
                data:rs,
                messages:"successed"
            }
           )
        }
        catch(err)
        {
            next(err);
        }
    },
    getNewUserinfo:async(req,res,next)=>{
        try{
            const {uid}=req.body;

            const rs  =await userInfoM.getUserinfo({uid});
            res.status(200).send(
             {
                 data:rs,
                 messages:"successed"
             }
            )
        }
        catch(err)
        {
            next(err);
        }
    },
    addMovieToInfo:async(req,res,next)=>{
        try{
            
            console.log(req.body)
            const {vid,uid,img} = req.body;
           // const username=req.session.username;
            const rs=await userInfoM.addMovieToInfo({vid,uid,img});
         
            if(rs)
            {
                res.status(200).send(
                    {
                        messages:'Add successed'
                    }
                )
            }
            else{
                res.status(200).send(
                    {
                     
                        messages:'Add fail'
                    }
                )
            }
           
        }
        catch(err)
        {
            next(err);
        }
    }
,
removeMovieToInfo:async(req,res,next)=>{
    try{
        
        console.log(req.body)
        const {vid,uid} = req.body;
       // const username=req.session.username;
        const rs=await userInfoM.removeMovieToInfo({vid,uid});
        
        if(rs)
        {
            res.status(200).send(
                {
                    data:rs,
                    messages:'Add successed'
                }
            )
        }
        else{
            res.status(200).send(
                {
                 
                    messages:'Add fail'
                }
            )
        }
       
    }
    catch(err)
    {
        next(err);
    }
}

}