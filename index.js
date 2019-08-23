const express=require('express')
const app=express()
const hbs=require('hbs')
const path=require('path')


app.use(express.static(__dirname+'/public'))
app.set('view engine','hbs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const entryroute=require('./routes/entry.js')

app.use(entryroute)

app.get('/',(req,res)=>{
    res.render('index1')
    //res.send('welcome')
})

app.listen(3000)