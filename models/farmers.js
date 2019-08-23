const Sequelize=require('sequelize')
const sequelize=new Sequelize({
    dialect:'sqlite',
    storage:'./databases/test.sqlite',
})

const Farmers=sequelize.define('farmers',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
<<<<<<< HEAD
        // autoIncrement:true,
=======
        //autoIncrement:true,
>>>>>>> 33ba80f9dbc4e8adcb95b62335035fb8cdb29a51
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
    crop:{
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