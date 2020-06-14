const express = require('express');
const router = express.Router();
const path = require('path');
const app_path = require('../util/app-path');

// const addProductPage = `
// <html><head><title>Add Product</title></head><body>
//     <div> <a href='/'>Back to Home page</a> </div>
//     <form action='/product' method='POST'>
//         <input type='text' name='product-name' placeholder='Product Name'/>
//         <button type='submit'>Add Product</button>
//     </form>
// </body></html>`;

router.get('/add-product',(req, res, next)=>{
    // res.send(addProductPage);
    res.sendFile(path.join(app_path.views, 'add-product.html'));
});

router.post('/product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;