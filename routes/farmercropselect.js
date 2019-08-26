const route=require('express').Router()

route.get('/farmercropselect',(req,res)=>{
    res.render('cropRegister')
})

module.exports=route