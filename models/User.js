const mongoose= require ('mongoose');

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:6,
        max:25
    },
    email:{
        type:String,
        required:true,
        min:6,
        max:255

    },
    password:{
        type:String,
        required:true,
        min:8
        
    },
    date:{
        type:Date,
        default:Date.now
        }


})

//const User=mongoose.model('Users,UserSchema);
module.exports=mongoose.model('User',UserSchema);