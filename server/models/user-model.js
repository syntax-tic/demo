const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    username:{type:String, required:true},
    password:{type:String, required:true},
    email:{type:String, required:true},
    isAdmin:{type:Boolean, default:false}
});


const User = new model('User', userSchema);

module.exports = User;