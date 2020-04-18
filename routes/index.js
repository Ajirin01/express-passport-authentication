var express = require('express');
var router = express.Router();
var auth_controllers = require('../controllers/auth_controller')
var auth_middleware = function(req,res,next){
  if(req.isAuthenticated()){
    next();
  }else{
    res.redirect('/login')
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/signup', auth_controllers.signup);
router.get('/login', auth_controllers.login);
router.get('/profile', auth_middleware, auth_controllers.profile);
router.get('/logout',auth_controllers.logout)
module.exports = router;
