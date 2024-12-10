const userModel = require('../models/user.model');//requiring the usermodel
const userService = require('../services/user.service');
const {validationResult} = require('express-validator')// it is used to check that the data provided is validated or not correctoly


module.exports.registerUser = async ( req,res,next)=>{
const errors = validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
}
const {firstname, lastname , email , password} = req.body;
const hashedPassword  = await userModel.hashPassword(password);
}