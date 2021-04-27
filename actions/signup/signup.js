const { email, passwordEmail, port } = require('../../config.json');
const { user } = require("../../user.config");

const { generateHash } = require('../../service/hash');
const nodemailer = require('nodemailer');

async function signUp(req, res){
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
        user.email = req.body.email;
        user.username = req.body.username;
        user.name = req.body.name;
        user.password = req.body.password;

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

        res.send('На вашу почту отправлено письмо с подтверждениям');
        
    } catch(e){
        console.log(e);
        res.send('Error');
    }
}

module.exports = { signUp };
