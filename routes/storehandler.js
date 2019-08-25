const route=require('express').Router()
const Farmers=require('../models/tablesCreater').Farmers

route.post('/store',(req,res)=>{
    Farmers.findAll({
        where:{
            crops:req.body.cropname,
            location:req.body.Destination
        }
    }).then(function(Farmers){
        //res.json(Farmers)
        let arr=Farmers.map(u=>u.get({plain:true}))
        res.render('buyview',{arr})
    })
    // .then(Farmers=>{
    //     res.render('buyview')
    // }).then(()=>{
    //     console.log('Hey in get request')
    // })
})

module.exports=route