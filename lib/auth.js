const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { db } = require("./postgres"); 
require("dotenv").config();
const SECRET = process.env.SECRET;
const auth = {
    checkHeaders: async (req, res, next) => {
        const token = req.headers["x-token"];
        if(token){
          try{
            const {user} = jwt.verify(token, SECRET );
            req.user = user;
          }catch(e){
            //INVALID token
            const newToken = await auth.checkToken(token);
            console.log(newToken);
            req.user = newToken.user;
            if(newToken.token){
              res.set("Access-Control-Expose-Headers", "x-token");
              res.set("x-token", newToken.token);
            }
          }
        }
        next();
      },
    checkToken: async (token) =>{
        let idUser=null;
        try{
          const {user} = await jwt.decode(token);
          idUser=user;
        }catch(e){
          return {}
        }
        const user = await db.one("SELECT * FROM users WHERE id=$1",idUser);
        const newToken = auth.getToken(user);
        return {
          user: user.id,
          token: newToken
        }
      },
    getToken: ({id}) => {
        const token = jwt.sign({user:id}, SECRET, {expiresIn:'10m'});
        return token;

    },
    login: async (email,password,SECRET)=>{
        return db.one("SELECT * FROM users WHERE email=$1",[email])
            .then(async (res) => {
                const hashPassword = await bcrypt.compare(password,res.password);
                if(!hashPassword){
                    return{
                        success: false,
                        message: "Password invalido",
                        token:null
                    }
                }else{
                    const token = auth.getToken(res,SECRET)
                    return {
                        success: true,
                        message: null,
                        token: token
                    }
                }
            })
            .catch((err) => {
                return{
                    success: false,
                    message: "No existe el email",
                    token:null
                }
            });
    },

}
module.exports = { auth };