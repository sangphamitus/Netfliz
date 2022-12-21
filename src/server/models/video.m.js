const {
    fdb
} = require("../.config/firebase");

const queryDB=require("../.config/postgres");
const CryptoJS = require('crypto-js');
const {
    getClient,db
}=require("../.config/postgres");
module.exports = {
    addVideo: async (name ,url,image,ratting) => {
        const vid = CryptoJS.SHA256(url, {
            outputLength: 10 
        }).toString(CryptoJS.enc.Hex).slice(0,10);
        var client=db;

            var rs = await db.any(`select * from public.\"Videos\" where \"vid\" like '${vid}'`)
            
            if(rs.length==0)
            {let query="";
               query=`insert into  public.\"Videos\"(\"vid\",\"link\",\"name\") 
                    VALUES ('${vid}','${url}','${name}')`;
                db.any(query);
              let  update=""
                if(image!=null)
                {   
                   update+=`"image"='${image}'`
                }
                if(ratting!= null)
                {
                    if(update.length!=0)
                    {
                        update+=",";
                    } 
                    update+=`"ratting"=${ratting}`
                }
                query=`UPDATE public."Videos" 
                set ${update}  
                where "vid"='${vid}'`;
           
                db.any(query);
                return {'vid':vid,'url':url,'name':name,'image':image,'ratting':ratting};
            }
            else{
                console.log("Video trung khop");
                return null;
            }
           
        }, 
    allVideos: async () => {
     
        var client=db;
        
            var rs = await db.any(`select * from public.\"Videos\"`)
          
            return rs;
           
        }, 
    getVideo:async(vid)=> {
        var client=db;
        
         var rs = await db.one(`select * from public.\"Videos\" where \"vid\" like '${vid}'`)
          
        return rs;
    },
    getNewVideo:async(number)=> {
        var client=db;
        
         var rs = await db.any(`SELECT * FROM public."Videos"
         Limit ${number}`)
          if(rs.length==0){
            return null;
          }
          else{
            return rs;
          }
    },
    getHotVideo:async(number)=> {
        var client=db;
        
         var rs = await db.any(`SELECT * FROM public."Videos"
         ORDER BY  ratting DESC
         Limit ${number}`)
  
          if(rs.length==0){
            return null;
          }
          else{
            return rs;
          }
    },
    getFilterVideo:async(filter)=>{
        var client=db;
        let query=`SELECT * 
        FROM public."Videos"
        Where `

        let first=true;
        filter.forEach(element => {
            if(element!="")
            {
                if(first!=true)
                {
                    query+=`and `
                    
                }
             if(first===true) first=false 
                query+=`"type" like '%${element}%' `
            } 
           
        });

        console.log(query);
        var rs = await db.any(query)
        if(rs.length==0){
            return null;
          }
          else{
            return rs;
          }
        
         
    },
    getSearchVideo:async(key)=>{
        var client=db;
        let query=`SELECT * 
        FROM public."Videos"
        WHERE LOWER("name") like  LOWER(N'%${key}%')  `

        console.log(query);
        var rs = await db.any(query)
        if(rs.length==0){
            return null;
          }
          else{
            return rs;
          }
        
         
    },
    createEpisode:async(name)=>{

    
        const eid = CryptoJS.SHA256(name+(new Date()).toUTCString(), {
            outputLength: 10 
        }).toString(CryptoJS.enc.Hex).slice(0,10);
        const id = CryptoJS.SHA256((new Date()).toUTCString(), {
            outputLength: 10 
        }).toString(CryptoJS.enc.Hex).slice(0,10);
        let query="";
        query=`insert into  public.\"Episode\"(\"id\",\"eid\",\"collectionName\") 
             VALUES ('${id}','${eid}','${name}')`;
         db.any(query);

         return eid;

         
    },
    addToEpisode:async(eid,vid)=>{


       query=`UPDATE public."Videos"
       SET "haveEp"= '${eid}'
       WHERE "vid"= '${vid}'
       returning*;`

       const rs= await db.any(query);
         return rs;

         
    },
    getEpisode:async(eid)=>{


        let query=`SELECT *
        FROM public."Videos"
        WHERE "haveEp" = '${eid}'`
 
        const rs=  db.any(query);
          return rs;
 
          
     },
}