const express=require('express')
const Sequelize=require('sequelize')
const Users=require('../models/tablesCreater').Users
const passport=require('../passport')
const session=require('express-session')
const sessionFarmer=require('express-session')
const Farmers=require('../models/tablesCreater').Farmers
const passportFarmer=require('../passportfarmer')

const route=express.Router()

route.use(session({
    secret: 'nobody can guess',
    saveUninitialized: true,
    resave: false,
    cookie: { secure: false }
}))

route.use(sessionFarmer({
    secret: 'farmer secret',
    saveUninitialized: true,
    resave: false,
    cookie: { secure: false }
}))

route.use(passport.initialize())
route.use(passport.session())

route.use(passportFarmer.initialize())
route.use(passportFarmer.session())


route.get('/loginforbuyer',(req,res)=>{
    res.render('loginPageBuyer')
})

route.get('/loginforfarmer',(req,res)=>{
    res.render('loginPageFarmer')
})

route.get('/signup',(req,res)=>{
    res.render('signup')
})



route.post('/signup',(req,res)=>{
    //if(req.body.category1.on) const cate='Buyer'
    //else const cate='Farmer'
    const cate=req.body.category1?'Buyer':'Farmer'
    console.log(cate)
    if(cate=='Buyer'){
        Users.create({
            username:req.body.username,
            password:req.body.password,
            firstname:req.body.username,
            lastname:req.body.lastname,
            contactNum:req.body.contactnumber,
            category:cate,
        }).then(newuser=>{
            res.redirect('/loginforbuyer')
            //res.send(newuser.category)
        })
    }
    else{
        Farmers.create({
            username:req.body.username,
            password:req.body.password,
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            contactNum:req.body.contactnumber,
            category:cate,
        }).then(newfarmer=>{
            res.redirect('/loginforfarmer')
            //res.send('FarmerAdded')
        })
    }

})

route.post('/loginforbuyer',function(req,res,next){
    passport.authenticate('local',function (error,user,info){
        if(!user){
            if(info.message=='NoSuchUser'){
                res.redirect('/signup')
            }
            else if(info.message=='WrongPassword'){
                res.redirect('/loginforbuyer')
            }
        }
        else{
            req.logIn(user,err=>{
                if(err){
                    return console.log(err)
                }
                else{
                    res.redirect('/selectcrop')
                }
            })
        }
    })(req,res,next)
})

route.post('/loginforfarmer',function(req,res,next){
    passportFarmer.authenticate('local',function (error,user,info){
        if(!user){
            if(info.message=='NoSuchUser'){
                res.redirect('/signup')
            }
            else if(info.message=='WrongPassword'){
                res.redirect('/loginforfarmer')
            }
        }
        else{
            req.logIn(user,err=>{
                if(err){
                    return console.log(err)
                }
                else{
                    res.redirect('/farmercropselect')
                }
            })
        }
    })(req,res,next)
})

module.exports=route