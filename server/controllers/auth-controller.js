const User = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const register = async (req, res) =>{

    try{
    const {username, password, email} = req.body;
    const userExists = await User.findOne({username:username});

    if(userExists){
        return res.status(400).json({msg:"User already exists, please login to continue"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userCreated = await User.create({username :username, password: hashedPassword, email:email});
    const token = await jwt.sign(JSON.stringify(userCreated), process.env.JWT_KEY);
    return res.status(201).json({msg:"User registered successfully",username:userCreated.username, token:token});
}catch(e){
    console.log(e);
}

}


const login = async (req, res)=>{
    try{
        const {username, password} = req.body;
        const userExists = await User.findOne({username:username});
        if(!userExists) {
            return res.status(400).json({msg:"Invalid username or password"});
        }
        const isValid = bcrypt.compare(password, userExists.password);
        if(isValid){
            const token = jwt.sign(JSON.stringify(userExists), process.env.JWT_KEY);
            return res.json({msg:"Login successful",username:username, token:token})
        }
        else{
            return res.status(400).json({msg:"Invalid username or password"});
        }
    }catch(e){
        console.log(e);
    }
}
module.exports = {register, login};