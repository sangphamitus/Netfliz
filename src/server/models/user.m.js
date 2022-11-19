const {
    fdb
} = require("../.config/firebase");

const queryDB=require("../.config/postgres");
const CryptoJS = require('crypto-js');
const {
    getClient
}=require("../.config/postgres")
module.exports = {

    registerUser: async (username, password, email, permission) => {
        
    var client=await getClient();
    
        var rs = await client.query(`select * from public.\"Users\" where \"username\" like '${username}'`)
      
        if (rs.rows.length == 0) {
          
            const hashedUsername=CryptoJS.SHA256(username,{
                outputLength:10 }).toString(CryptoJS.enc.Hex);
            console.log(hashedUsername.slice(0,11));
            let query=`insert into  public.\"Users\"(\"uid\",\"username\", \"password\",\"email\",\"permission\") 
            VALUES ('${hashedUsername.slice(0,11)}', '${username}', '${password}', '${email}', ${permission}) `;
            console.log(query)
            rs = await client.query(query);
            return true;
        }
        return false
    },
    loginUser: async (username, password) => {
        
        var client=await getClient();
        
            var rs = await client.query(`select * from public.\"Users\" where \"username\" like '${username}' and \"password\" like '${password}'`)
          
           
            return rs
        },
    validUID: async (uid) => {
        
        var client=await getClient();
        
            var rs = await client.query(`select * from public.\"Users\" where \"uid\" like '${uid}' `)
          
            if(rs.rows.length==0){
                return false;
            }
            else{
                return true;
            }
        },



}