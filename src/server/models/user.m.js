const {
    fdb
} = require("../.config/firebase");

const queryDB=require("../.config/postgres");
const CryptoJS = require('crypto-js');
const {
    getClient,db
}=require("../.config/postgres")
const userinfoM=require("./userinfo.m");
module.exports = {

    registerUser: async (username, password, email, permission) => {
        
    var client=db;
    
        var rs = await db.any(`select * from public.\"Users\" where \"username\" like '${username}' or \"email\" like '${username}'`)
      
        if (rs.length == 0) {
          
            const hashedUsername=CryptoJS.SHA256(username,{
                outputLength:10 }).toString(CryptoJS.enc.Hex);
            console.log(hashedUsername.slice(0,11));
            let query=`insert into  public.\"Users\"(\"uid\",\"username\", \"password\",\"email\",\"permission\") 
            VALUES ('${hashedUsername.slice(0,11)}', '${username}', '${password}', '${email}', ${permission}) `;
            console.log(query)
            userinfoM.addNewUserinfo({uid:hashedUsername.slice(0,11)});
            rs = await db.any(query);
            return true;
        }
        return false
    },
    loginUser: async (username, password) => {
        
        var client=db;
        
            var rs = await db.any(`select * from public.\"Users\" where \"username\" like '${username}' and \"password\" like '${password}'`)
            if(rs.length==0)
            {
                rs = await db.any(`select * from public.\"Users\" where \"email\" like '${username}' and \"password\" like '${password}'`)
                if(rs.length==0)
                {
                    return null;
                }
                return rs;
            }

            return rs[0];
        },
    validUID: async (uid) => {
        
        var client=db;
        
            var rs = await db.any(`select * from public.\"Users\" where \"uid\" like '${uid}' `)
          
            if(rs.length==0){
                return false;
            }
            else{
                return true;
            }
        },



}