const Users=require('./users').Users
const syncfun=require('./users').function
const sequelize=require('./users').sequelize

const express=require('express')
const route=express.Router()

const Sequelized=require('sequelize')
const sequelized=new Sequelized({
    dialect:'sqlite',
    storage:'./databases/test.sqlite',
})

const Farmers=require('./farmers').Farmers
const syfun=require('./farmers').function
const sequel=require('./farmers').sequelize

const Cart=sequelized.define('cart',{
    tokenid:{
        type:Sequelized.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    farmerid:{
        type:Sequelized.INTEGER,
    },
    buyerid:{
        type:Sequelized.INTEGER,
    },
    placewhererawmaterialis:{
        type:Sequelized.STRING,
    },
    destinationplace:{
        type:Sequelized.STRING,
    },
    crop:{
        type:Sequelized.STRING,
    },
    cropq:{
        type:Sequelized.INTEGER,
    },
    cropp:{
        type:Sequelized.INTEGER,
    }
        
    })


syncfun(Users).then(()=>{
    Users.bulkCreate([
        {
    id: 101,
    username: "kiran",
    password: "1234",
    firstname: "Kiran",
    lastname: "Malhotra",
    contactNum: "9876577588",
    category: "buyer"
            
        },
        {
    id: 102,
    username: "laura",
    password: "5678",
    firstname: "Laura",
    lastname: "Meth",
    contactNum: "9876500588",
    category: "buyer"
        
        },
        {
    id: 103,
    username: "pk",
    password: "1234",
    firstname: "Piku",
    lastname: "Malhotra",
    contactNum: "9876577088",
    category: "buyer"  
        },
    
    ]).then(()=>console.log('written'))
    
}).then(()=>{
    return console.log('Synced to Users')
}).then(()=>{
	syfun(Farmers).then(()=>{
    Farmers.bulkCreate([
        {
    id:201,
    username:"ram",
    password:"1234",
    firstname:"Ram",
    lastname:"Nagpal",
    contactNum:"9876577588",
    crops: "paddy",
    price: 100,
    location: "Punjab"
            
        },
        {
    id: 202,
    username: "laura",
    password: "5678",
    firstname: "Laura",
    lastname: "Meth",
    contactNum: "9876500588",
    crops: "paddy",
    price: 100,
    location: "Haryana"
        
        },
        {
    id: 203,
    username: "pk",
    password: "1234",
    firstname: "Kiran",
    lastname: "Malhotra",
    contactNum: "9876577588",
    crops: "paddy",
    price: 100,
    location: "New Delhi" 
        },
        {
    id: 204,
    username: "ks",
    password: "1234",
    firstname: "kipu",
    lastname: "Malhotra",
    contactNum: "9876577588",
    crops: "paddy",
    price: 100,
    location: "Rajasthan"  
        },
        {
    id: 205,
    username: "lk",
    password: "1234",
    firstname: "lio",
    lastname: "Malhotra",
    contactNum: "9876577588",
    crops: "paddy",
    price: 50,
    location: "Punjab"
        },
        {
    id: 206,
    username: "yz",
    password: "1234",
    firstname: "yiopl",
    lastname: "Malhotra",
            contactNum: "9876577588",
    crops: "paddy",
    price: 10,
    location: "Punjab"
        }
    
    ]).then(()=>console.log('written'))
    
}).then(()=>{
    return console.log('Synced to Farmers')   
    })
        

	}).then(()=>{
        
    // const Cart=sequelized.define('cart',{
    // tokenid:{
    //     type:Sequelized.INTEGER,
    //     primaryKey:true,
    //     autoIncrement:true,
    // },
    // farmerid:{
    //     type:Sequelized.INTEGER,
    // },
    // buyerid:{
    //     type:Sequelized.INTEGER,
    // },
    // placewhererawmaterialis:{
    //     type:Sequelized.STRING,
    // },
    // destinationplace:{
    //     type:Sequelized.STRING,
    // },
    // crop:{
    //     type:Sequelized.STRING,
    // },
    // cropq:{
    //     type:Sequelized.INTEGER,
    // },
    // cropp:{
    //     type:Sequelized.INTEGER,
    // }
        
    // })
    Cart.sync().then(()=>{
        console.log('Synced to Cart')
    })  
        
})


route.use(express.urlencoded({extended:true}))

// route.get('/store',(req,res)=>{
//     Farmers.findAll({
//         where:((req.body.cropname==crop) && (req.body.Destination==destinationplace))
//     }).then(function(Farmers){
//         //res.json(Farmers)
//         let arr=Farmers.map(u=>u.get({plain:true}))
//         res.render('buyview',{arr})
//     })
//     // .then(Farmers=>{
//     //     res.render('buyview')
//     // }).then(()=>{
//     //     console.log('Hey in get request')
//     // })
// })

sequelize.authenticate().then(()=>{
    console.log('Connected to Users')
})

sequel.authenticate().then(()=>{
    console.log('Connected to Farmers')
})

sequelized.authenticate().then(()=>{
    console.log('Connected to Cart')
})


module.exports={
    Users,Farmers,Cart
}