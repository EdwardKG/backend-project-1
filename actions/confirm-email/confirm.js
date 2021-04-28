const signUp = require('../../schems/signup');
const { user } = require("../../user.config");
const bcrypt = require('bcrypt');

function confirmEmail(req, res){
    if(req.params['token'] === user.tokenEmail){
            user.tokenEmail = '';
                    bcrypt.hash(user.password, 10)
                    .then(hash => {
                        const newUser = new signUp({
                            name:user.name.trim(),
                            email:user.email.trim(),
                            password:hash
                        })
                        //Save DB
                        newUser.save(() => {
                            res.send({message:"Регистрация успешна"});
                        })
                });
    } else {
        res.status(500).send({ message: 'Ошибка....' });
    }
}

module.exports = { confirmEmail };