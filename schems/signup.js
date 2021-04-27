const { Schema, model } = require('mongoose');

const signUp = new Schema({
    name:{
        type:String
    },
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    } 
})

module.exports = model("users", signUp, "users");