const Users=require('./users').Users
const syncfun=require('./users').function
const sequelize=require('./users').sequelize

const Farmers=require('./farmers').Farmers
const syfun=require('./farmers').function
const sequel=require('./farmers').sequelize

syncfun(Users).then(()=>{
    return console.log('Synced to Users')
}).then(()=>{
	syfun(Farmers).then(()=>{
		console.log('Synced to Farmers')
	})
})

syfun(Farmers).then(()=>{
    console.log('Synced to Farmers')
})

sequelize.authenticate().then(()=>{
    console.log('Connected to Users')
})

sequel.authenticate().then(()=>{
    console.log('Connected to Farmers')
})

module.exports={
    Users,Farmers
}