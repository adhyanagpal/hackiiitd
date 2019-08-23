const Users=require('./users').Users
const syncfunc=require('./users').function
const sequelize=require('./users').sequelize

syncfunc(Users).then(()=>{
    console.log('Synced to Users')
})

sequelize.authenticate().then(()=>{
    console.log('Connected to Users')
})

module.exports={
    Users,
}