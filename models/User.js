const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema= new Schema ({

    name:{
        type:String,
        min:6,
        max:50,
        required:[true]
    },
   
    email:{
    type:String,
    lowercase: true,
    required:[true, "entrée requise"]
    },
   
    password:{
        type:String,
        min:6,
        max:20,
        required: [true, 'mot de passe requis']
        
    },created_at: { type: Date, default: Date.now()  } 
    });
    
const User=mongoose.model("User",userSchema)
module.exports=User;