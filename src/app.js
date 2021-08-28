const bodyParser = require("body-parser");
const express = require('express');
const path = require('path');

const userRouter = require('./routers/route');

const app = express();

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'../views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'../public')));

app.use(userRouter.routers);

app.use((req,res,next)=>{
    res.status(404).render('404',{
        pageTitle : '404 Error',
        errorMsg : 'Page not found!'
    })
});

const port = process.env.PORT || 3000 ;
app.listen(port , ()=>console.log(`server is running on port ${port}`));