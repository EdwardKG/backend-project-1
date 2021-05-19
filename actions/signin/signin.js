const { user } = require("../../user.config");
const signUpSchema = require('../../schems/signup');
const bcrypt = require('bcrypt');

async function signIn(req, res){
    //Validate .... (not check length .....)
    if(!req.body.email){
        res.status(400).send({message:"Enter email!"});
    } else if(!req.body.password){
        res.status(400).send({message:"Enter the password!"});       
    } else {
        //Check DB for user the same params...
        signUpSchema.findOne( { email: req.body.email }, async (err, docs) => {
                if(err){
                    res.status(500).send({ message: 'Error....' });
                } else if (!docs) {
                    res.status(400).send({ message: 'Error...' });
                }
                else {
                    user.email = req.body.email.trim();
                    user.password = req.body.password.trim();
                    user.name = docs.name;
                    //check password
                    bcrypt.compare(user.password, docs.password, (err, result) => {
                        if (err) {
                            res.status(500).send({ message: "Error..." });
                        } else if (!result) {
                            res.status(401).send({ message: "Invalid password" });
                        }
                        else {
                            res.send({
                                message:"Successful authorization",
                                email:user.email,
                                name:user.name 
                            })     
                        }
                    });
                }
            })
        }
    }

module.exports = { signIn };

