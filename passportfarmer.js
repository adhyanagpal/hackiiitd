const passport=require('passport')
const LocalStrategy=require('passport-local').Strategy
const Farmers=require('./models/tablesCreater').Farmers
const session=require('express-session')

passport.use(new LocalStrategy((username,password,done)=>{
    {
        Farmers.findOne({
            where:{
                username:username
            }
        }).then(reluser=>{
            if(reluser==null){
                return done(null,false,{message:'NoSuchFarmer'})
            }
            if(reluser.password!=password){
                return done(null,false,{message:'WrongPassword'})
            }
            else{
                return done(null,reluser,{message:'Successful'})
            }
        })
    }
}))

passport.serializeUser((farmer,done)=>{
    done(null,farmer)
})

passport.deserializeUser((farmer,done)=>{
    done(null,farmer)
})

module.exports=passport

