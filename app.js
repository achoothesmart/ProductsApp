const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require('./Routes/Admin');
const shopRouter = require('./Routes/Shop');

app.use(bodyParser.urlencoded({extended : false}));
app.use('/Admin', adminRouter);
app.use(shopRouter);

app.listen(3000, ()=>{
    console.log('Server started and listening to http://localhost:3000');
});