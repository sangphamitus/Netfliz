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
    changeUserinfo: async({uid,name,dob})=>{
      const docs= await db.collection('userinfo').doc(uid).get();
      const result=docs.data();
      const usrinfo = db.collection('userinfo').doc(uid);
           usrinfo.set({
              name,
              uid,
              dob,
              listMovie:result.listMovie,
              timeStamp:result.timeStamp
           })
           const docs2= await db.collection('userinfo').doc(uid).get();
           const result2=docs2.data();
      return result2;
      }
    ,

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
    removeMovieToInfo:async({uid,vid})=>{
        const usrinfo = await db.collection('userinfo').doc(uid).get();
         const rs=usrinfo.data();

         let {listMovie}= rs;
      
         const filteredItems = listMovie.filter(item => item.vid !== vid)
         const usrinfo22 = db.collection('userinfo').doc(uid);
         console.log(filteredItems)
        usrinfo22.set({
            name:rs.name,
            uid:rs.uid,
            dob:rs.dob,
          listMovie:filteredItems,
           timeStamp:rs.timeStamp
         })
        return {
          name:rs.name,
          uid:rs.uid,
          dob:rs.dob,
        listMovie:filteredItems,
         timeStamp:rs.timeStamp
       };
    }

}