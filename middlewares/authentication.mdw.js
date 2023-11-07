import  jwt  from "jsonwebtoken";
import _ from "../config/config.js";
function isAuthenticated(req, res, next) {
    try {
     let token = req.get("authorization");
     if (!token){
      return res.status(404).json({ success: false, msg: "Token not found" });
     }
    token = token.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET_ACCESS_KEY);
    req.username = decoded.username;
    next();
   } catch (error) {
   return res.status(401).json({ success: false, msg: error.message });
   // console.error(error);
    }
}
function verifyRefresh(username, password, token) {
    try {
     const decoded = jwt.verify(token, process.env.SECRET_REFRESH_KEY);
     return decoded.password === password;
    } catch (error) {
     // console.error(error);
     return false;
    }
   }
export  {isAuthenticated,verifyRefresh}