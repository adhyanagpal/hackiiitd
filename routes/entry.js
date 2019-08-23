const express=require('express')
const Sequelize=require('sequelize')
const Users=require('../models/users')
const passport=require('../passport')
const session=require('express-session')

const route=express.Router()

route.use(session({
    secret: 'nobody can guess',
    saveUninitialized: true,
    resave: false,
    cookie: { secure: false }
}))

route.use(passport.initialize())
route.use(passport.session())


route.get('/login',(req,res)=>{
    res.render('loginPage')
})

route.get('/signup',(req,res)=>{
    res.render('signup')
})

route.post('/signup',(req,res)=>{
    //if(req.body.category1.on) const cate='Buyer'
    //else const cate='Farmer'
    const cate=req.body.category1?'Buyer':'Farmer'
    Users.create({
        username:req.body.username,
        password:req.body.password,
        firstname:req.body.username,
        lastname:req.body.lastname,
        contactNum:req.body.contactnumber,
        category:cate,
    }).then(newuser=>{
        res.redirect('/login')
        //res.send(newuser.category)
    })
})

route.post('/login',function(req,res,next){
    passport.authenticate('local',function (error,user,info){
        if(!user){
            if(info.message=='NoSuchUser'){
                res.redirect('/signup')
            }
            else if(info.message=='WrongPassword'){
                res.redirect('/login')
            }
        }
        else{
            req.logIn(user,err=>{
                if(err){
                    return console.log(err)
                }
                else{
                    res.redirect('/ourstore')
                }
            })
        }
    })(req,res,next)
})

module.exports=route