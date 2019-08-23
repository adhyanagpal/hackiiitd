const express=require('express')
const app=express()
const hbs=require('hbs')
const path=require('path')


app.use(express.static(__dirname+'/public'))
app.set('view engine','hbs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

hbs.registerPartials(path.join(__dirname,'/partials'))

const entryroute=require('./routes/entry.js')

app.use(entryroute)

app.get('/',(req,res)=>{
    res.render('index1')
    //res.send('welcome')
})
function isLoggedin(req,res,next){
    if(req.isAuthenticated){
        return next();
    }else{
        res.render('loginPage')
    }
}

app.get('/ourstore',isLoggedin,(req,res)=>{
        res.render('CropSelect')
        })

app.get('/logout',isLoggedin,(req,res)=>{
    req.logout();
    res.redirect('/');
})

app.listen(3000)