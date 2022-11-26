const userM = require('../models/user.m');
const CryptoJS = require('crypto-js');
const hashLength = 64;
const {
    getClient
} = require("../.config/postgres");

module.exports = {
    registerUser: async (req, res, next) => {
        try {

            const {
                username,
                password,
                email,
                permission
            } = req.body;
            const salt = username;
            const pwSalt = password + salt;

            const hashedPassword = CryptoJS.SHA256(pwSalt, {
                outputLength: hashLength * 4
            }).toString(CryptoJS.enc.Hex);

            console.log(username, hashedPassword, email, permission)
            const rs = await userM.registerUser(username, hashedPassword, email, permission);
            console.log(rs);
            if (rs == false) {
                res.status(200).send({
                    data: rs,
                    message: "valid username"
                });
            } else {
                
                res.status(200).send({
                    data: rs,
                    message: "success"
                });

            }
            
        } catch (err) {
            console.log(err);
            next(err);
        }
    },
    loginUser: async (req, res, next) => {
        try {
            console.log(req.body)
            const {
                username,
                password
                
            } = req.body;
            const salt = username;
            const pwSalt = password + salt;

            const hashedPassword = CryptoJS.SHA256(pwSalt, {
                outputLength: hashLength * 4
            }).toString(CryptoJS.enc.Hex);

            const rs = await userM.loginUser(username, hashedPassword);


            if (rs.rows == 0) {
                res.status(200).send({
                    data: rs,
                    message: "login failed"
                });
                return;
            }
            const user = rs.rows[0]
            if (req.body.remember=="true") {
                var hour = 3600000;
                req.session.cookie.maxAge = 14 * 24 * hour; //2 weeks
            } else {
                req.session.cookie.expires = false;
            }
            req.session.regenerate(function (err) {
                if (err) next(err)

                req.session.uid = user.uid;
                req.session.permission = user.permission;

                req.session.save(function (err) {
                    if (err) return next(err)
                    res.status(200).send({
                        data: user.uid,
                        permission: user.permission,
                        message: "success"
                    });
                })
            })
           
          
        
        } catch (err) {
            console.log(err);
            next(err);
        }

    },
    userAuthentication: async (req, res, next) => {
        console.log(req.session);
        if(req.session.uid!=null){
            const rs= await userM.validUID(req.session.uid)
            if(rs==true){
                next();
            }
            else
            {
            res.send(`
            <div>
            <h1>Please login</h1>
            <form action="/users/login" method="post">
                <input type="text" name="username" />
                <input type="text" name="password" />
                <input type="text" name="remember"  />
                <button type="submit" >Submit</button>
            </form>
            </div>
            `)

            }
        }
        else{
               res.send(`
            <div>
            <h1>Please login</h1>
            <form action="/users/login" method="post">
            <input type="text" name="username" />
            <input type="text" name="password" />
            <input type="text" name="remember"  />
            <button type="submit" >Submit</button>
        </form>
            </div>
            `)
        }
    }
}