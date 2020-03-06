const path = require('path')
const testSecret = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../www/pages/secret.html'))    
}

module.exports = testSecret