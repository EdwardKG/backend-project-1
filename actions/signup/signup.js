const { email, passwordEmail, port } = require('../../config.json');
const { user } = require("../../user.config");
const signUpSchema = require('../../schems/signup');
const { generateHash } = require('../../service/hash');
const nodemailer = require('nodemailer');

async function signUp(req, res){
    //Validate .... (not check length .....)
    if(!req.body.name){
        res.status(400).send({message:"Введите имя !"})
    }
    if(!req.body.email){
        res.status(400).send({message:"Введите почту !"});
    } 
    if(!req.body.password){
        res.status(400).send({message:"Введите пароль !"});       
    } else {
        user.email = req.body.email;
        user.name = req.body.name;
        user.password = req.body.password;
        //Check DB for user the same params...
        signUpSchema.find( { $or: [{ name: user.name },
            { email: user.email }]}, async (err, docs) => {
                if(err){
                    res.status(500).send({ message: 'Ошибка....' });
                }  
                if(docs.length){
                    res.status(400).send({message:'Пользователь с такими данными существует'});
                } else {
                    try{
                        //Config email data (password, sender email ....)
                        let transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                                user: email,
                                pass: passwordEmail
                            }
                        });
                        //Send email -_-
                        const token = generateHash();
                        user.tokenEmail = token;
                        setTimeout(() => {
                            user.tokenEmail = '';
                            console.log(user.tokenEmail);
                        }, 300000);
            
                        await transporter.sendMail({
                            from: email,
                            to: req.body.email,
                            subject: 'Подтверждение почты',
                            html: `<a href="http://localhost:${port}/confirm-email/${token}">Подтвердить</a>`
                        });
            
                        res.send({ message: 'На вашу почту отправлено письмо с подтверждениям' });
                    
                    } catch(e){
                        res.status(500).send({message:'Ошибка сервера'});
                    }
                }
            })
        }
    }

module.exports = { signUp };
