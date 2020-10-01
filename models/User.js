const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema= new Schema ({

    name:{
        type:String,
        minlength:2,
        maxlength:50,
        required:[true]
    },
   
    email:{
    type:String,
    lowercase: true,
    required:[true, "entrée requise"]
    },
   
    password:{
        type:String,
        minLength:8,
        maxLength:20,
        required: [true, 'mot de passe requis']
        
    },created_at: { type: Date, default: Date.now()  } 
    });
    const User=mongoose.model("User",userSchema)
    module.exports=User;