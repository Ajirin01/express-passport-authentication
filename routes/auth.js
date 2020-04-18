var express = require('express');
var router = express.Router();
var auth_controllers = require('../controllers/auth_controller')
var User = require('../db/User');
/* GET home page. */


module.exports = function(passport){
    router.post('/signup', function(req, res, next) {
        var username = req.body.username;
        var password = req.body.password;
        // console.log(username, password);
        User.findOne({username:username, password:password},function(err, doc){
            if(err){res.status(500).send('error occured')}
            else{
                if(doc){
                    res.status(500).send('Username already exists')
                }
                else{
                    var record = new User()
                    record.username = username;
                    record.password = record.hashPassword(password)
                    record.save(function(err,user){
                        if(err){
                            res.status(500).send('db error occured')
                        }else{
                            res.send(user)
                        }
                    })
                }
            }
        })
});

router.post('/login', passport.authenticate('local',{
    failureRedirect:'/login',
    successRedirect:'/profile', 
}),function(req,res){
    res.send('hey');
});





    return router
}
// module.exports = router;
