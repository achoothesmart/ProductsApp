const express = require('express');
const router = express.Router();
const path = require('path');
const app_path = require('../util/app-path');

router.get('/',(req, res, next)=>{
    // res.send(homePage);
    res.sendFile(path.join(app_path.views, 'home.html'));
});



module.exports = router;