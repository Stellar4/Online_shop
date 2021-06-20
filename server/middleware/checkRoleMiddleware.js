const jwt = require("jsonwebtoken")

module.exports = function(roles){
    return function(req, res, next){
        if (req.method == "OPTIONS"){
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token){
                return res.status(401).json("User not authorised, no token")
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (!roles.includes(decoded.role)){
                return res.status(403).json({message: "Access denied"})
            }
            req.user = decoded
            next()

        } catch(e){
            return res.status(401).json("User not authorised")
        }
    }
}