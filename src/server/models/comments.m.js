const {admin,db} =require('../.config/firebase');
const CryptoJS = require('crypto-js');
const hashLength = 64;
module.exports= 
{
    addComment: async({vid,cid,username,content})=>{

    const currCid=  CryptoJS.SHA256(username+(new Date()), {
        outputLength: 10 
    }).toString(CryptoJS.enc.Hex).slice(0,10);
    const cmts = db.collection('comments').doc(vid);
   
    console.log({vid,cid,username,content})
    if(cid==null)
    {
        cmts.collection(currCid).doc(currCid).set({
            cid:currCid,
           username,
           content,
           like:0,
          timeStamp:new Date()
        })
   
    }
    else{
        cmts.collection(cid).doc(currCid).set({
            cid:currCid,
            username,
            content,
            like:0,
           timeStamp:new Date()
         })
    }
 
    return await cmts.get();
    },
    getComment:async({vid})=>{
        const cmts = await  db.collection(`comments`).doc(vid).listCollections();
        //const rs=cmts.collections.map(doc => doc.data());
        const rs= await Promise.all(cmts.map(async collection=> 
            {
                const docs=await db.collection(`comments`).doc(vid).collection(collection.id).get();
               
                const result=docs.docs.map(doc=>doc.data());
               
                return {key:collection.id,data:result};
            }))
       
        console.log(rs);
        return rs;
    }

}