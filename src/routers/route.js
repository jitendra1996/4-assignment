const express = require('express');
const router = express.Router();

const names = [];

router.get('/',(req,res,next)=>{
    res.render('form', {
        pageTitle : 'Form'
    })
})

router.post('/',(req,res,next)=>{
    names.push({ username : req.body.name});
    res.redirect('users');
})

router.get('/users', (req,res)=>{
    res.render('users', {
        names : names ,
        pageTitle : 'Users'
    })
})

exports.routers = router;
exports.names = names ;