const Sequelize=require('sequelize')
const sequelize=new Sequelize({
    dialect:'sqlite',
    storage:'./databases/test.sqlite',
})

const Farmers=sequelize.define('farmers',{
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
        allownull:false,
    },
    lastname:{
        type:Sequelize.STRING,
        allownull:false,        
    },
    contactNum:{
        type:Sequelize.INTEGER,
        allownull:false,
    },
    crops:{
        type:Sequelize.STRING,
        primaryKey:true,
        allowNull:false,
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false,
    }
})

module.exports={
    Farmers,
    function(database){
        return database.sync({force:true})
    },
    sequelize
}