var express = require('express');
var router = express.Router();
const user = require('../controller/usercontroller')

/* GET home page. */
router.post('/',user.insert);
router.get('/',user.select);
router.post('/login',user.login);

module.exports = router;
