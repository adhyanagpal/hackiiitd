const Sequelize=require('sequelize')
const sequelize=new Sequelize({
    dialect:'sqlite',
    storage:'./databases/test.sqlite',
})

const Users=sequelize.define('users',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    username:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    firstname:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    lastname:{
        type:Sequelize.STRING,
        allowNull:false,        
    },
    contactNum:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    category:{
        type:Sequelize.STRING,
        allowNull:false,
    },

})

//Users.sync({force:true}).then(()=>{
//     console.log('Synced to users')
// })

// sequelize.authenticate().then(()=>{
//     console.log('Connected')
// })

//module.exports=Users

module.exports={
    Users,
    function (table){
        return table.sync({force:true})
    },
    sequelize
}