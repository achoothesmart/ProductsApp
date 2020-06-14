const express = require('express');
const router = express.Router();
const path = require('path');
const app_path = require('../util/app-path');

router.get('/add-product',(req, res, next)=>{
    // res.send(addProductPage);
    res.sendFile(path.join(app_path.views, 'add-product.html'));
});

router.post('/product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;