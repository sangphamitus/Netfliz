const {admin,db} =require('../.config/firebase');
const CryptoJS = require('crypto-js');
const hashLength = 64;
module.exports= 
{
    addNewUserinfo: async({uid})=>{
    const usrinfo = db.collection('userinfo').doc(uid);
         usrinfo.set({
            name:"username",
            uid,
            dob:'01/01/1900',
            listMovie:[],
           timeStamp:new Date()
         })
    const docs= await db.collection('userinfo').doc(uid).get();
         const result=docs.data();
    return result;
    },
    getUserinfo:async({uid})=>{
    
        const docs= await db.collection('userinfo').doc(uid).get();
        const result=docs.data();
   return result;
    },
    addMovieToInfo:async({vid,uid,img})=>{
    
        const docs= await db.collection('userinfo').doc(uid).get();

        const result=docs.data();
        console.log(result);
        const {name,dob,timeStamp}= result;
        let {listMovie} = result;
        const usrinfo = db.collection('userinfo').doc(uid);
        console.log(listMovie);
        if(!listMovie.some(item=>item.vid===vid))
        {
            listMovie.push({vid,img});
         
            usrinfo.set({
               name,
               uid,
               dob,
             listMovie,
              timeStamp
            })
            return true;
        }

        return false;
    },
    removeMovieToInfo:async({uid,vid,img})=>{
        const usrinfo = db.collection('userinfo').doc(uid);
         
        return await usrinfo.get();
    }

}