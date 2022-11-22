const {
    fdb
} = require("../.config/firebase");

const queryDB=require("../.config/postgres");
const CryptoJS = require('crypto-js');
const {
    getClient
}=require("../.config/postgres");
module.exports = {
    addVideo: async (name ,url) => {
        const vid = CryptoJS.SHA256(url, {
            outputLength: 10 
        }).toString(CryptoJS.enc.Hex).slice(0,10);
        var client=await getClient();
        
            var rs = await client.query(`select * from public.\"Videos\" where \"vid\" like '${vid}'`)
          
            if(rs.rows.length==0)
            {
                let query=`insert into  public.\"Videos\"(\"vid\",\"link\",\"name\") 
                VALUES ('${vid}','${url}','${name}')`;

                client.query(query);
                return {'vid':vid,'url':url,'name':name};
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
          if(rs.rows.length==0){
            return null;
          }
          else{
            return rs.rows[0];
          }
    }
}