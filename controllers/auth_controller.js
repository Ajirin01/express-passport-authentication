
exports.signup = function(req,res,next){
    return res.render('signup');
}
exports.login = function(req,res,next){
    return res.render('login');
}
exports.logout = function(req,res,next){
   req.logout();
   res.redirect('/');
}
exports.profile = function(req,res,next){
    // return res.render('profile',{profile:req.session});
    var msg = req.user.username + ' is logged in';
    return res.render('index',{login_status:msg, title:'Dash board'});
}