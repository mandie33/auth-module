const Joi=require("joi");

const registerData=data=>{
const schema=Joi.object({
    name:Joi.string().min(6).required(),
    email:Joi.string().min(6).required().email(),
    password:Joi.string().min(6).required(),
})
        return schema.validate(data);
}

const loginData=data=>{
    const schema=Joi.object({
        name:Joi.string().min(6).required(),
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required(),
    })
            return schema.validate(data);
    }

module.exports={
    registerData,
    loginData
}
