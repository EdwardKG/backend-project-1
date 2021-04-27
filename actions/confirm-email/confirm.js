const signUp = require('../../schems/signup');
const { user } = require("../../user.config");
const bcrypt = require('bcrypt');

function confirmEmail(req, res){
    if(req.params['token'] === user.tokenEmail){
        user.tokenEmail = '';
        signUp.find( { $or: [{ username: user.username },
            { email: user.email }]}, (err, docs) => {
                console.log(docs);
                if(err){
                    res.send('Ошибка....');
                }  
                if(docs.length){
                    res.send('Пользователь с такими данными существует');
                } else {
                    bcrypt.hash(user.password, 10)
                    .then(hash => {
                        const newUser = new signUp({
                            name:user.name,
                            username:user.username,
                            email:user.email,
                            password:hash
                        })
        
                        newUser.save(() => {
                            res.send('Save user');
                        })
                    });
                }
            });
    } else {
        res.send('Ошибка....');
    }
}

module.exports = { confirmEmail };