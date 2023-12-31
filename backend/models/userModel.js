const mongoose = require('mongoose')


const  userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        role:{
            type:String,
            default:"admin"
        }
    }
)

const userModel = mongoose.model('users', userSchema)

module.exports = userModel