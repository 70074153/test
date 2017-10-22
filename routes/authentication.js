'use strict';
const User = require('../models/users');
module.exports = (router) => {
    router.post('/register',(req,res) => {
    //     res.send("hello working !");
    // console.log("hello working !");
        if(!req.body.email){
            res.json({success:false,message:'email not found'})
        } else {
        if(!req.body.username){
            res.json({success:false,message:'username not found'})
        } else{
            if(!req.body.password){
                res.json({success:false,message:'password not found'})
            }else{
                let user = new User({
                    email : req.body.email.toLowerCase(),
                    username : req.body.username.toLowerCase(),
                    password : req.body.password
                });
                user.save((err) => {
                    if(err){
                        res.json({success: false , message:'could not create user',err})
                    }else{
                        res.json({success: true , message:'user created'})
                        console.log("User Created ");
                    }
                });
            }

        }

    }
    });
    return router;
}