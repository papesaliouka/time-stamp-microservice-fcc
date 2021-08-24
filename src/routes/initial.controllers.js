const path = require('path')

function homePageController (req, res) {
    res.sendFile(path.join(__dirname, '..', '..', 'views','index.html'));
};


module.exports = {
    homePageController
}