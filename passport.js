const passport=require('passport')
const LocalStrategy=require('passport-local').Strategy
const Users=require('./models/users')
const session=require('express-session')

passport.use(new LocalStrategy((username,password,done)=>{
    //if(req.user===undefined) return done(null,false,{message:{NoSuchUser}})
    {
        Users.findOne({
            where:{
                username:username
            }
        }).then(reluser=>{
            if(reluser==null){
                return done(null,false,{message:'NoSuchUser'})
            }
            if(reluser.password!==password){
                return done(null,false,{message:'WrongPassword'})
            }
            else{
                return done(null,reluser,{message:'Successful'})
            }
        })
    }

}))

passport.serializeUser((user,done)=>{
    done(null,user)
})

passport.deserializeUser((user,done)=>{
    done(null,user)
})

module.exports=passport