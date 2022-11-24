const {
    fdb
} = require("../.config/firebase");

const queryDB=require("../.config/postgres");
const CryptoJS = require('crypto-js');
const {
    getClient
}=require("../.config/postgres");
module.exports = {
    addVideo: async (name ,url,image,ratting) => {
        const vid = CryptoJS.SHA256(url, {
            outputLength: 10 
        }).toString(CryptoJS.enc.Hex).slice(0,10);
        var client=await getClient();

            var rs = await client.query(`select * from public.\"Videos\" where \"vid\" like '${vid}'`)
            
            if(rs.rows.length==0)
            {let query="";
               query=`insert into  public.\"Videos\"(\"vid\",\"link\",\"name\") 
                    VALUES ('${vid}','${url}','${name}')`;
                client.query(query);
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
           
                client.query(query);
                return {'vid':vid,'url':url,'name':name,'image':image,'ratting':ratting};
            }
            else{
                console.log("Video trung khop");
                return null;
            }
           
        }, 
    allVideos: async () => {
     
        var client=await getClient();
        
            var rs = await client.query(`select * from public.\"Videos\"`)
          
            return rs.rows;
           
        }, 
    getVideo:async(vid)=> {
        var client=await getClient();
        
         var rs = await client.query(`select * from public.\"Videos\" where \"vid\" like '${vid}'`)
          
         console.log(rs.rows[0])
         if(rs.rows.length==0){
            return null;
          }
          else{
            return rs.rows[0];
          }
    },
    getNewVideo:async(number)=> {
        var client=await getClient();
        
         var rs = await client.query(`SELECT * FROM public."Videos"
         Limit ${number}`)
          if(rs.rows.length==0){
            return null;
          }
          else{
            return rs.rows;
          }
    },
    getHotVideo:async(number)=> {
        var client=await getClient();
        
         var rs = await client.query(`SELECT * FROM public."Videos"
         ORDER BY  ratting DESC
         Limit ${number}`)
          if(rs.rows.length==0){
            return null;
          }
          else{
            return rs.rows;
          }
    },
}