var express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
    res.render('page2');
});

module.exports = router;