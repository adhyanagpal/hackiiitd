const Sequelize=require('sequelize')
const sequelize=new Sequelize({
    dialect:'sqlite',
    storage:'./databases/test.sqlite',
})
// module.exports={
//     up:function(queryInterface,Sequelize){
//         return queryInterface.createTable('Users'),{

//         }
//     }
// }
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
    crops:{
        type:Sequelize.INTEGER,
        //primaryKey:true,
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