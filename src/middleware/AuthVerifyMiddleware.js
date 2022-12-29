var jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    let Token = req.headers['token-key'];
    jwt.verify(Token, 'secretkey123', function(err, decoded) {
        if (err) {
            res.status(401).json({ status: "unauthorized" })
        } else {
            //get user name from  decoded token and add with request header
            let username = decoded['data']['UserName']
            req.headers.username = username
            next();
        }
    })
}