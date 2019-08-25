const route=require('express').Router()

route.get('/selectcrop',(req,res)=>{
    res.render('CropSelect')
})

module.exports=route